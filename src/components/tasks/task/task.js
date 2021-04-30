import React from "react";
import classNames from "classnames";
import "../tasks.css";

export default class Task extends React.Component {
    render() {
        const {
            text,
            id,
            important,
            done,
            deleteTask,
            onToogleDone,
            onToogleImportant,
        } = this.props;

        return (
            <div className="task-container" onClick={null}>
                <li
                    className={classNames("collection-item", {
                        yellow: important,
                    })}
                    onClick={null}>
                    <div className="task-block">
                        <div
                            className={classNames("task", {
                                "task-done": done,
                            })}
                            onClick={() => onToogleDone(id)}>
                            {text}
                        </div>
                        <div className="task-btn">
                            <div
                                className="trash"
                                onClick={() => deleteTask(id)}>
                                <i className="tiny material-icons">delete</i>
                            </div>
                            <div
                                className="exclamation"
                                onClick={() => onToogleImportant(id)}>
                                <i className="tiny material-icons">
                                    lightbulb_outline
                                </i>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}
