import React from "react";
import Task from "./task/task";

import "./tasks.css";

export default function Tasks({
    data,
    deleteTask,
    onToogleDone,
    onToogleImportant,
}) {
    return (
        <div className="container">
            <ul className="collection with-header">
                {data.map((item) => (
                    <Task
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        important={item.important}
                        done={item.done}
                        deleteTask={deleteTask}
                        onToogleDone={onToogleDone}
                        onToogleImportant={onToogleImportant}
                    />
                ))}
            </ul>
        </div>
    );
}
