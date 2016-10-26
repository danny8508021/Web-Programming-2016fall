import React, { Component } from 'react';

class ControlPanel extends Component {
  render() {
    let { clearComplete } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.children}</span>
        <button className="clear-completed" onClick={clearComplete}>Clear completed</button>
      </footer>
    );
  }
}

module.exports = ControlPanel;