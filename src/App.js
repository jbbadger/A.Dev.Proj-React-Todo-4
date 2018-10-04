import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { todo: [{ descriptor: 'run', isComplete: false},
                          { descriptor: 'jump', isComplete: true},
                          { descriptor: 'play', isComplete: false}],
                   newTodo: ""
                  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.toggleDone = this.toggleDone.bind(this);
  this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo (item) {
    const filterTodos = this.state.todo.filter((filtItem) => filtItem !== item);
    this.setState({ todo: filterTodos});
  }

  toggleDone(index) {
    const slicedTodos = this.state.todo.slice();
    const czech = slicedTodos[index];
    czech.isComplete = !czech.isComplete;
    this.setState({ todo: slicedTodos })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodo) {return}
    let createTodo = { todo: this.state.newTodo, isComplete: false };
    this.setState({ todo: [...this.state.todo, createTodo], newTodo: ""});
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value })
  }

  render() {
    return (
      <div className="App">
      <ul>
        {this.state.todo.map((item, index) =>
          <Todo key= { index }
            descriptor={ item.descriptor }
            isComplete={ item.isComplete }
            toggleDone={ () => this.toggleDone(index)}
            deleteTodo={ () => this.deleteTodo(item)} />
        )}
      </ul>
      <form onSubmit={ this.handleSubmit }  >
        <input type="text" value={ this.state.newTodo } onChange={ this.handleChange }/>
        <input type="submit" />
      </form>
      </div>
    );
  }
}

export default App;
