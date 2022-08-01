import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      comment: '',
      topic: 'react',
    };
  }

  userInputHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  commentInputHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  selectInputHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.userInput} ${this.state.comment} ${this.state.topic}`)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserInfo</label>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.userInputHandler}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={this.state.comment}
              onChange={this.commentInputHandler}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.selectInputHandler}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
