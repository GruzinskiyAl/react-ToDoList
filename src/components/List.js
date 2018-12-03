import React, {Component} from "react";

import Task from "./Task";

class List extends Component {
  
  render() {
    return (
      <div className="list">
        {this.props.tasks.map((task, index) => {
          return (
            <Task 
              task = {task}
              index = {index}
              key = {index}
              handleDropTask = {this.props.handleDropTask}
              handleChangeTaskStatus = {this.props.handleChangeTaskStatus}
            /> 
          )
        })}
      </div>
    );
  }

}

export default List;