import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <li>
        <input
          type='checkbox'
          checked={ this.props.isComplete }
          onChange={ this.props.toggleDone }
           />
        <span> { this.props.descriptor } </span>
        <span><button onClick= { this.props.deleteTodo }>Delete</button></span>
      </li>

    );
  }
}

export default Todo;
