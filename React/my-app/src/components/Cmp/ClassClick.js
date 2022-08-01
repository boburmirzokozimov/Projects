import React, { Component } from 'react';

class ClassClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandler() {
    console.log('Clicked with object');
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }

  decrement() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>+</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    );
  }
}

export default ClassClick;
