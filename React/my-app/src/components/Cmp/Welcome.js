import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>
          Hello from class, {name}. You're {age} years old.
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
