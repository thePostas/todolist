import React, {Component} from 'react';
import Task from "../components/Task";

export default class TaskGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            tasks: [],
            percent: 0
        };
        this.handleInput = this.handleInput.bind(this);
        this.createButton = this.createButton.bind(this);
        this.taskRemove = this.taskRemove.bind(this);

        // this.updateTasks = this.updateTasks.bind(this);
    }

    componentShouldUpdate() {
        console.log(this.state.tasks)
    }

    handleInput(event) {
        this.setState({inputValue: event.target.value});
    }

    createButton(e) {
        e.preventDefault();
        let updatedTasks = this.state.tasks;
        if (this.state.inputValue) {
            updatedTasks.push(<Task key={this.state.inputValue + Math.floor(Math.random() * (0 - 100 + 1)) + 0} title={this.state.inputValue} taskRemove={this.taskRemove}/>);
            this.setState({
               tasks: updatedTasks
            });
            this.props.updateTasks(this.state.tasks);
        }
        console.log(this.state.tasks);
    }


    taskRemove(targetTask) {
        let updatedTasks = this.state.tasks;
        updatedTasks.map((currentTask, index) => {
            if (targetTask === currentTask.props) {
                updatedTasks.splice(index, 1);
            }
        });
        this.setState({
            tasks: updatedTasks
        })
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
                        <input
                            className={'todolist__task-generator-input'} type={'text'}
                            inputValue={this.state.value}
                            onChange={this.handleInput}
                        />
                        <button onClick={this.createButton} className={'todolist__task-generator-button'}>Add</button>
                    </div>
                </form>
        )
    }
}