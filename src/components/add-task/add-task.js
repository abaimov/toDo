import React from "react";
import "./add-task.css";

export default class AddTask extends React.Component {
    state = { text: "" };

    onLabelChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };
    onLabelSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.text);
        this.setState({
            text: "",
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form action="" onSubmit={this.onLabelSubmit}>
                        <div className="col s10">
                            <input
                                type="text"
                                id="autocomplete-input"
                                className="autocomplete"
                                onChange={this.onLabelChange}
                                placeholder="Add task"
                                value={this.state.text}
                            />
                        </div>

                        <div className="col s2">
                            <button
                                onClick={null}
                                className="btn waves-effect waves-light btn-small green"
                                type="submit"
                                name="action">
                                add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
