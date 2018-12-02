import React, {Component} from "react";

class Task extends Component {

  state = {

  }

  render() {
    return(
      <div className="task">
        <span
          style = {{textDecoration: this.props.task.done ? "line-through":
                    "none"}} 
          className="task__value"
        >
          {this.props.task.value}
        </span>

        <button className="task__del-btn">
          Drop
        </button>
      </div>
    );
  }

}

export default Task;