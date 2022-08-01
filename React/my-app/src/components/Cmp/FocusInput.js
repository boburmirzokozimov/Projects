import React, { Component } from 'react';
import Input from './Input';

export class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.focusInput = React.createRef();
  }

  clickHandler = () => {
    this.focusInput.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.focusInput} />
        <button onClick={this.clickHandler}>Focus on element</button>
      </div>
    );
  }
}

export default FocusInput;
