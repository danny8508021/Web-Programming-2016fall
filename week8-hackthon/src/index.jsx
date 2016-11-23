// import './todo.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  componentDidMount() {
    const socket = io();
    console.log('socket is running !');
  }

  render() {
    return (
      <div>Hello</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
