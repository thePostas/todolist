import React, {Component} from 'react';
import TaskGenerator from '../components/TaskGenerator';
import Task from '../components/Task';

export default class ToDoList extends Component {
    constructor() {
        super(...arguments);
        this.state = {

        };
        this.updateTasks = this.updateTasks.bind(this);
    }

    updateTasks(value) {
        this.setState({ tasks: value })
    }

    render() {
        return (
            <div className={'todolist'}>
                <TaskGenerator updateTasks={this.updateTasks}/>
                <div className={'todolist__tasks'}>
                    {this.state.tasks}
                </div>
            </div>
        )
    }
}