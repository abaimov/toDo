import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import AddTask from "./components/add-task/add-task";
import SearchTask from "./components/search-task/search-task";
import Tasks from "./components/tasks/tasks";

export default class App extends React.Component {
    state = {
        dataToDo: [
            this.createTask("one"),
            this.createTask("two"),
            this.createTask("three"),
        ],

        term: "",
        filter: "all",
    };

    // body Task
    createTask(text) {
        return { id: uuidv4(), text, important: false, done: false };
    }
    // index
    getIndex(arr, id) {
        const idx = arr.findIndex((el) => el.id === id);
        return idx;
    }

    // DEL
    deleteTask = (id) => {
        this.setState(({ dataToDo }) => {
            const newArr = dataToDo.filter((el) => el.id !== id);
            return {
                dataToDo: newArr,
            };
        });
    };

    // ADD
    addTask = (text) => {
        this.setState(({ dataToDo }) => {
            const newArr = [...dataToDo, this.createTask(text)];
            return {
                dataToDo: newArr,
            };
        });
        this.createTask(text);
    };

    onToogleDone = (id) => {
        this.setState(({ dataToDo }) => {
            const oldObj = dataToDo[this.getIndex(dataToDo, id)];
            const newObj = { ...oldObj, done: !oldObj.done };

            const newState = [
                ...dataToDo.slice(0, this.getIndex(dataToDo, id)),
                newObj,
                ...dataToDo.slice(this.getIndex(dataToDo, id) + 1),
            ];

            return {
                dataToDo: newState,
            };
        });
    };

    onToogleImportant = (id) => {
        this.setState(({ dataToDo }) => {
            const oldObj = dataToDo[this.getIndex(dataToDo, id)];
            const newObj = { ...oldObj, important: !oldObj.important };

            const newState = [
                ...dataToDo.slice(0, this.getIndex(dataToDo, id)),
                newObj,
                ...dataToDo.slice(this.getIndex(dataToDo, id) + 1),
            ];

            return {
                dataToDo: newState,
            };
        });
    };

    search(dataToDo, term) {
        if (term.length === 0) {
            return dataToDo;
        }
        return dataToDo.filter((item) => {
            return item.text.indexOf(term.toLowerCase()) > -1;
        });
    }

    filter(items, filter) {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter((item) => !item.done);
            case "done":
                return items.filter((item) => item.done);

            default:
                return items;
        }
    }

    searchTask = (term) => {
        this.setState({ term });
    };
    onFilterChange = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { dataToDo, term, filter } = this.state;

        const visibalTasks = this.filter(this.search(dataToDo, term), filter);

        return (
            <div className="container">
                <h1>toDo</h1>
                <SearchTask
                    searchTask={this.searchTask}
                    filter={filter}
                    onFilterChange={this.onFilterChange}
                />
                <Tasks
                    data={visibalTasks}
                    deleteTask={this.deleteTask}
                    onToogleDone={this.onToogleDone}
                    onToogleImportant={this.onToogleImportant}
                />
                <AddTask addTask={this.addTask} />
            </div>
        );
    }
}
