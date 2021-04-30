import React from "react";
import "./search-task.css";

const buttons = [{ name: "all" }, { name: "active" }, { name: "done" }];

export default class SearchTask extends React.Component {
    state = {
        term: "",
    };

    onSearchTask = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.searchTask(term);
    };

    render() {
        const { filter, onFilterChange } = this.props;

        const btns = buttons.map((btn, index) => {
            const isActive = filter === btn.name;
            const clacc = !isActive && "grey lighten-1";
            return (
                <div key={index} className="col">
                    <button
                        onClick={() => onFilterChange(btn.name)}
                        className={`btn waves-effect waves-light btn-small ${clacc}`}
                        type="button">
                        {btn.name}
                    </button>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <form action="">
                        <div className="col s5">
                            <div>
                                <input
                                    type="text"
                                    id="autocomplete-input"
                                    className="autocomplete"
                                    value={this.state.term}
                                    onChange={this.onSearchTask}
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="">
                                <div className="row">{btns}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
