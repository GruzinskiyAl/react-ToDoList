import React, {Component} from 'react';

class Form extends Component {

  render() {
    return (
      <div className="form">
        <h3>
          To Do List
        </h3>
        <input
          className = "form__input"
          value = {this.props.inputValue}
          onChange = {e => this.props.handleChange(e)}
        />
        <button 
          className="form__add-btn"
          onClick = {e => this.props.handleAddTask(e)}
        >
          Add
        </button>
      </div>
    )
  }

}

export default Form;