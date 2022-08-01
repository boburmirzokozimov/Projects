import React, { Component } from 'react';
import ChildComp from './ChildComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Parent',
    };
  }

  greetParent = (child) => {
    alert(`Hello ${this.state.message} from ${child}`);
  };

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComp;
