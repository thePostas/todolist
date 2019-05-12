import React, {Component} from 'react';

export default class Task extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            done: false
        };
    }
    createButtonEvent() {
        this.props.updateDoneTasks(this.state.done);
    }
    render() {
        return (
            <div className={'todolist__task-task'}>
                <p>{this.props.title}</p>
                <span onClick={(evt) => {
                    // evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
                    this.props.deleteTaskEvent(this.props);
                }} className={'todolist__task-task-close'}>+</span>
                <input onClick={
                    (evt) => {
                        if(evt.target.checked) {
                            evt.target.parentNode.classList.add('todolist__task-task-done');
                            this.state.done = true;
                            this.props.taskIsDone(this.state.done, evt.target);
                        } else {
                            evt.target.parentNode.classList.remove('todolist__task-task-done');
                            this.state.done = false;
                            this.props.taskIsDone(this.state.done, evt.target);
                        }
                    }
                } type={'checkbox'} className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}
