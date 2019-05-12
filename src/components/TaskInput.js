import React, {Component} from 'react';
import TaskGenerator from "../components/TaskGenerator";
import Task from "../components/Task";

export default class TaskInput extends Component {
    constructor() {
        let input = document.getElementsByClassName('todolist__task-generator-input')[0];
        super(...arguments);
        this.state = {
        }
    }
    createButtonEvent() {

    }

    render() {
        return (
            <div className={'todolist__task-generator-input-wrapper'}>
                <input className={'todolist__task-generator-input'} type={'text'}/>
                <button onClick={this.createButtonEvent} className={'todolist__task-generator-button'}>Add</button>
            </div>
        )
    }
}