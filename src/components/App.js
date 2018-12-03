import React, { Component } from 'react';

import Form from './Form';
import List from './List';

class App extends Component {

  state = {
    inputValue: "",
    tasks: [],
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  handleAddTask  = e => {
    let tasks = this.state.tasks;
    let text = this.state.inputValue;

    if (text) {
      tasks.push({value: this.state.inputValue, done:false});
      this.setState({
        tasks: tasks, 
        inputValue: ""})
    }
  }

  handleDropTask = (e, id) => {
    e.stopPropagation();
    let tasks = this.state.tasks;
    tasks.splice(id, 1);
    
    this.setState({
      tasks: tasks
    })
  }

  handleChangeTaskStatus = id => {
    let tasks = this.state.tasks;
    tasks[id].done = !tasks[id].done;
    
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return ( 
      <div className="main-window">
        <Form
          handleChange  = {this.handleChange}
          handleAddTask = {this.handleAddTask}
          inputValue = {this.state.inputValue}
        />
        <List
          tasks = {this.state.tasks}
          handleDropTask = {this.handleDropTask}
          handleChangeTaskStatus = {this.handleChangeTaskStatus}
        />
      </div>
    );
  }
}


export default App;
