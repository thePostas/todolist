import React, {Component} from 'react';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            ...props
        };
        this.handleCloseTask = this.handleCloseTask.bind(this);
        this.isDone = this.isDone.bind(this);
    }

    handleCloseTask(e) {
        this.props.taskRemove(this);
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    }
    
    isDone(e) {
        if (e.target.checked) {
            e.target.parentNode.classList.add('todolist__task-task-done');
            this.setState({
                done: true
            });
        } else {
            e.target.parentNode.classList.remove('todolist__task-task-done');
            this.setState({
                done: false
            });
        }
    }

    // componentWillUnmount() {
    //     this.removeListener('click', this.handleCloseTask());
    // }
    
    componentDidMount() {
        this.props.done = this.state.done;
    }

    render() {
        return (
            <div className={'todolist__task-task'}>
                <p>{this.props.title}</p>
                <span onClick={this.handleCloseTask}  className={'todolist__task-task-close'}>+</span>
                <input onClick={this.isDone} type={'checkbox'} className={'todolist__task-task-checkbox'}/>
            </div>
        )
    }
}
