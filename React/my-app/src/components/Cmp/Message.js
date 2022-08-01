import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome visitor',
      subscribe: 'Subscribe',
    };
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for subscribing',
      subscribe: 'Subscribed',
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>
          {this.state.subscribe}
        </button>
      </div>
    );
  }
}

export default Message;
