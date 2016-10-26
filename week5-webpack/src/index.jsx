require('./todo.css');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const NewTodo = require('./NewTodo.jsx');
const ItemList = require('./ItemList.jsx');
const ControlPanel = require('./ControlPanel.jsx');

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
  }

  addTodo = (node, event) => {
    if(event.charCode === 13 && node.value.trim()) {
      const obj = {
        id: Date.now(),
        text: node.value,
        completed: false,
        display: true,
      };
      node.value = '';
      this.setState((state) => {
        state.content = [
          obj,
          ...state.content,
        ];
      });
    }
  }

  completeItem = (id) => {
    this.setState((state) => {
      state.content.find((value, index) => {
        if(value.id === id) { value.completed = !value.completed; return true; }
        return false;
      });
      return state;
    });
  }

  deleteItem = (id) => {
    this.setState((state) => {
      state.content.find((value, index, array) => {
        if(value.id === id) {
          array.splice(index, 1);
          return true;
        }
        return false;
      });
      return state;
    });
  }

  completeAll = () => {
    console.log('click');
    this.setState((state) => {
      let flag = false;
      state.content.forEach((value) => {
        if(!value.completed) {
          value.completed = true;
          flag = true;
        }
      });
      if(flag) return state;
      else {
        state.content.forEach((value) => {
          value.completed = false;
        });
        return state;
      }
    })
  }

  clearComplete = () => {
    this.setState((state) => {
      state.content = state.content.filter((value, index, array) => {
        return !value.completed;
      });
      return state;
    });
  }

  countDisplay() {
    length = this.state.content.length;
    if(length === 0) return false;
    else if(length === 1) return '1 item left';
    else return length.toString() + ' items left';
  }

  render() {
    return (
      <section className="todoapp">
        <NewTodo addTodo={this.addTodo} />
        <ItemList content={this.state.content} complete={this.completeItem} deleteI={this.deleteItem} completeAll={this.completeAll}/>
        <ControlPanel clearComplete={this.clearComplete}>{this.countDisplay()}</ControlPanel>
      </section>     
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
