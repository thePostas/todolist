import React, {Component} from 'react';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: true,
            ...props
        };
        this.handleCloseTask = this.handleCloseTask.bind(this);
        this.isDone = this.isDone.bind(this);
    }

    handleCloseTask() {
        this.props.taskRemove(this.props.index);
    }
    
    isDone(e) {
        if (e.target.checked) {
            this.setState({
                done: false
            });
            this.state.updateStatus(this.props.index, this.state.done)
        } else {
            this.setState({
                done: true
            });
            this.state.updateStatus(this.props.index, this.state.done)
        }
    }

    render() {
        return (
            <div
                className={this.state.done ? 'todolist__task-task': 'todolist__task-task todolist__task-task-done'}
            >
                <p>
                    {this.props.title}
                    </p>
                <span
                    onClick={this.handleCloseTask}
                    className={'todolist__task-task-close'}>
                    +
                </span>
                <input
                    onClick={this.isDone}
                    type={'checkbox'}
                    className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}
