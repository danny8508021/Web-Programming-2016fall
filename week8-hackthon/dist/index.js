'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./todo.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _NewTodo = require('./NewTodo.jsx');

var _NewTodo2 = _interopRequireDefault(_NewTodo);

var _ItemList = require('./ItemList.jsx');

var _ItemList2 = _interopRequireDefault(_ItemList);

var _ControlPanel = require('./ControlPanel.jsx');

var _ControlPanel2 = _interopRequireDefault(_ControlPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoApp = function (_Component) {
  _inherits(TodoApp, _Component);

  function TodoApp() {
    _classCallCheck(this, TodoApp);

    var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this));

    _this.addTodo = function (node, event) {
      if (event.charCode === 13 && node.value.trim()) {
        (function () {
          var obj = {
            id: Date.now(),
            text: node.value,
            completed: false,
            display: true
          };
          node.value = '';
          _this.setState(function (state) {
            state.content = [obj].concat(_toConsumableArray(state.content));
          });
        })();
      }
    };

    _this.completeItem = function (id) {
      _this.setState(function (state) {
        state.content.find(function (value, index) {
          if (value.id === id) {
            value.completed = !value.completed;return true;
          }
          return false;
        });
        return state;
      });
    };

    _this.deleteItem = function (id) {
      _this.setState(function (state) {
        state.content.find(function (value, index, array) {
          if (value.id === id) {
            array.splice(index, 1);
            return true;
          }
          return false;
        });
        return state;
      });
    };

    _this.completeAll = function () {
      console.log('click');
      _this.setState(function (state) {
        var flag = false;
        state.content.forEach(function (value) {
          if (!value.completed) {
            value.completed = true;
            flag = true;
          }
        });
        if (flag) return state;else {
          state.content.forEach(function (value) {
            value.completed = false;
          });
          return state;
        }
      });
    };

    _this.clearComplete = function () {
      _this.setState(function (state) {
        state.content = state.content.filter(function (value, index, array) {
          return !value.completed;
        });
        return state;
      });
    };

    _this.state = {
      content: []
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: 'countDisplay',
    value: function countDisplay() {
      length = this.state.content.length;
      if (length === 0) return false;else if (length === 1) return '1 item left';else return length.toString() + ' items left';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'todoapp' },
        _react2.default.createElement(_NewTodo2.default, { addTodo: this.addTodo }),
        _react2.default.createElement(_ItemList2.default, { content: this.state.content, complete: this.completeItem, deleteI: this.deleteItem, completeAll: this.completeAll }),
        _react2.default.createElement(
          _ControlPanel2.default,
          { clearComplete: this.clearComplete },
          this.countDisplay()
        )
      );
    }
  }]);

  return TodoApp;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(TodoApp, null), document.getElementById('root'));