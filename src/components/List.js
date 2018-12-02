import React, {Component} from "react";

import Task from "./Task";

class List extends Component {
  
  state = {
    tasks: [
      { value: "Do Some work", done: false },
      { value: "Clean", done: true }
    ]

  }

  render() {
    return (
      <div className="list">
        {this.state.tasks.map((task, index) => {
          return (
            <Task 
              task = {task}
              key = {index}
            /> 
          )
        })}
      </div>
    );
  }

}

export default List;