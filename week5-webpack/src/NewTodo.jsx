import React, { Component } from 'react';

class NewTodo extends Component {
  constructor() {
    super();
  }
  render() {
    const { addTodo, completeAll } = this.props;
    const othis = this;
    return (
      <header className="header">
        <h1>todos</h1>
        <input ref="thisOne"
               className="new-todo"
               placeholder="What needs to be done?"
               onKeyPress={(e) => addTodo(othis.refs.thisOne, e)} />
      </header>
    );
  }
}

module.exports = NewTodo;