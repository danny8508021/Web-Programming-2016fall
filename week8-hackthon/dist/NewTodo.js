"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewTodo = function (_Component) {
  _inherits(NewTodo, _Component);

  function NewTodo() {
    _classCallCheck(this, NewTodo);

    return _possibleConstructorReturn(this, (NewTodo.__proto__ || Object.getPrototypeOf(NewTodo)).call(this));
  }

  _createClass(NewTodo, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          addTodo = _props.addTodo,
          completeAll = _props.completeAll;

      var othis = this;
      return _react2.default.createElement(
        "header",
        { className: "header" },
        _react2.default.createElement(
          "h1",
          null,
          "todos"
        ),
        _react2.default.createElement("input", { ref: "thisOne",
          className: "new-todo",
          placeholder: "What needs to be done?",
          onKeyPress: function onKeyPress(e) {
            return addTodo(othis.refs.thisOne, e);
          } })
      );
    }
  }]);

  return NewTodo;
}(_react.Component);

module.exports = NewTodo;