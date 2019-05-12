import React, {Component} from 'react';
import Task from "../components/Task";

export default class TaskGenerator extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            tasks: [],
            doneTasks: 0,
            percent: 0
        };

        this.createButtonEvent = this.createButtonEvent.bind(this);
        this.deleteTaskEvent = this.deleteTaskEvent.bind(this);
        this.taskIsDone = this.taskIsDone.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    componentDidMount() {
        this.INPUT = document.getElementsByClassName('todolist__task-generator-input')[0];
        this.percent = document.getElementsByClassName('todolist__progress-bar-percent')[0];
    }

    calculate() {
        return  Math.floor(this.state.doneTasks / this.state.tasks.length * 100);
    }

    createButtonEvent() {
        if (this.INPUT.value) {
            this.state.tasks.push(<Task title={this.INPUT.value} deleteTaskEvent={this.deleteTaskEvent} taskIsDone={this.taskIsDone} index={this.state.tasks.length}/>);
            this.INPUT.value = '';
            }
        this.props.updateTasks(this.state.tasks);
        this.state.percent = this.state.doneTasks === 0 ? 0 : this.calculate();
    }

    deleteTaskEvent(taskForDelete) {
        this.state.tasks.map((search, index) => {
            if (taskForDelete === search.props) {
              this.state.tasks.splice(index,1);
                this.props.updateTasks(this.state.tasks);
            }
        })
    }

    taskIsDone(answer, target) {
        this.state.percent = this.state.doneTasks === 0 ? 0 : this.calculate();
        if (answer) {
            this.state.doneTasks++;
            this.state.tasks.map((search, index) => {
                if(search === target) {
                    search.state.done = true;
                }
            })

        } else {
            this.state.doneTasks--;
            this.state.tasks.map((search, index) => {
                if(search === target) {
                    search.state.done = false;
                }
            })
        }
    }

    render() {
        return (
                <form className={'todolist__task-generator'}>
                    <legend className={'todolist__task-generator-legend'}>to do list</legend>
                    <div className={'todolist__progress-bar'}>
                        <p className={'todolist__progress-bar-percent'}>{this.state.percent}%</p>
                        <div className={'todolist__progress-bar-done'}/>
                    </div>
                    <div className={'todolist__task-generator-input-wrapper'}>
                        <input className={'todolist__task-generator-input'} type={'text'}/>
                        <button onClick={(evt)=> {evt.preventDefault();this.createButtonEvent()}} className={'todolist__task-generator-button'}>Add</button>
                    </div>
                </form>
        )
    }
}