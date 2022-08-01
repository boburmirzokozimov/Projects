import React from 'react';

const Hello = (props) => {
    return (
      <div className='dummy'>
        <h1> Hello {props.name} age is {props.age}</h1>
        {props.children}
      </div>
    );
//   return React.createElement(
//     'div',
//     { id: 'Hello', className: 'dummy' },
//     React.createElement('h1', null, 'Hello Mr Boburmirzo')
//   );
};

export default Hello;
