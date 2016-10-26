import React, { Component } from 'react';

class ItemList extends Component {
  constructor() {
    super();
  }

  genItems(content, complete, deleteI) {
    return content.map((value, index) => {
      return <TodoItem key={index}
                       content={value}
                       complete={complete}
                       deleteI={deleteI}/>;
    });
  }

  render() {
    const { content, complete, deleteI, completeAll } = this.props;
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" onClick={() => completeAll()} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.genItems(content, complete, deleteI)}
        </ul>
      </section>
    );
  }
}

class TodoItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { content, complete, deleteI} = this.props;
    if (content.display === false) return false;

    if(content.completed === true) {
      return (
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" checked={true} onClick={() => complete(content.id)}/>
            <label>{content.text}</label>
            <button className="destroy" onClick={() => deleteI(content.id)}></button>
          </div>
        </li>
      );
    }
    else {
      return (
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" checked={false} onClick={() => complete(content.id)}/>
            <label>{content.text}</label>
            <button className="destroy" onClick={() => deleteI(content.id)}></button>
          </div>
        </li>
      );
    }
  }
}

module.exports = ItemList;