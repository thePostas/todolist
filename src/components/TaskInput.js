import React, {Component} from 'react';
import TaskGenerator from "../components/TaskGenerator";
import Task from "../components/Task";

export default class TaskInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (

        )
    }
}