import React, {Component} from "react";

class Task extends Component {

  handleChangeTaskStatus = e => {
    this.props.handleChangeTaskStatus(this.props.index);
  }

  render() {
    return(
      <div 
        className={this.props.task.done ? "task task_done": "task task_waiting"}
        onClick = {e => this.handleChangeTaskStatus(e)}
      >
        <span>
          {this.props.task.value}
        </span>

        <button 
          className="task__del-btn"
          onClick = {(e) => this.props.handleDropTask(e, this.props.index)}
        >
          {"\u00D7"}
        </button>
      </div>
    );
  }

}

export default Task;