import React, {Component} from 'react';

class Form extends Component {
  
  state = {
    inputValue: "",
  };

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <div className="form">
        <h3>To Do List</h3>
        <input
          className = "form__input"
          value = {this.state.inputValue}
          onChange = {e => this.handleChange(e)}
        />
      </div>
    )
  }

}

export default Form;