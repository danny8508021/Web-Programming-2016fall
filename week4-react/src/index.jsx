require('./todo.css');

const { Component } = React;
const NewTodo = require('./NewTodo.jsx');
const ItemList = require('./ItemList.jsx');
const ControlPanel = require('./ControlPanel.jsx');

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      content: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.completeItem = this.completeItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.clearComplete = this.clearComplete.bind(this);
  }

  addTodo(node, event) {
    if(event.charCode === 13 && node.value.trim()) {
      let obj = {
        id: Date.now(),
        text: node.value,
        completed: false,
        display: true,
      };
      node.value = '';
      this.setState(() => this.state.content.push(obj));
    }
  }

  completeItem(id) {
    this.setState(() => {
      this.state.content.find((value, index) => {
        if(value.id === id) { value.completed = !value.completed; return true; }
        return false;
      })
    });
  }

  deleteItem(id) {
    this.setState(() => {
      this.state.content.find((value, index, array) => {
        if(value.id === id) {
          array.splice(index, 1);
          return true;
        }
        return false;
      })
    });
  }

  clearComplete() {
    let newContent = this.state.content.filter((value, index, array) => {
      return !value.completed;
    });
    this.setState({ content: newContent });
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
        <ItemList content={this.state.content} complete={this.completeItem} deleteI={this.deleteItem} />
        <ControlPanel clearComplete={this.clearComplete}>{this.countDisplay()}</ControlPanel>
      </section>     
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);
