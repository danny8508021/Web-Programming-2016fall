import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      func: a => a,
      num: '0',
      display: '0',
      istyping: false,
      afterEqual: false,
    };
  }

  resetState() {
    // TODO
    this.setState({
      func: a => a,
      num: '0',
      display: '0',
      istyping: false,
      afterEqual: false,
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  operation(func) {
    if (!this.state.afterEqual)
      this.equal();
    this.setState((state) => {
      state.istyping = false;
      state.func = func;
      state.num = state.display;
      state.afterEqual = false;
      return state;
    });
  }

  equal() {
    this.setState((state) => {
      if (typeof (state.func(Number(state.display))) !== 'number') {
        state.func = state.func(Number(state.display));
        state.display = state.num;
      }
      state.istyping = false;
      state.display = state.func(Number(state.display)).toString();
      state.num = 0;
      state.afterEqual = true;
      return state;
    });
  }

  getNum(x) {
    this.setState((state) => {
      if (!(x === '0' && Number(state.display) === 0)) {
        if (!state.istyping) {
          state.display = x;
          state.istyping = true;
        }
        else state.display += x;
      }
      return state;
    });
  }

  display() {
    return this.state.display;
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.display()}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton onClick={() => this.operation(b => a => a / b)} className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.getNum('7')} className="calc-number">7</CalcButton>
            <CalcButton onClick={() => this.getNum('8')} className="calc-number">8</CalcButton>
            <CalcButton onClick={() => this.getNum('9')} className="calc-number">9</CalcButton>
            <CalcButton onClick={() => this.operation(b => a => a * b)} className="calc-operator">x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.getNum('4')} className="calc-number">4</CalcButton>
            <CalcButton onClick={() => this.getNum('5')} className="calc-number">5</CalcButton>
            <CalcButton onClick={() => this.getNum('6')} className="calc-number">6</CalcButton>
            <CalcButton onClick={() => this.operation(b => a => a - b)} className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.getNum('1')} className="calc-number">1</CalcButton>
            <CalcButton onClick={() => this.getNum('2')} className="calc-number">2</CalcButton>
            <CalcButton onClick={() => this.getNum('3')} className="calc-number">3</CalcButton>
            <CalcButton onClick={() => this.operation(b => a => a + b)} className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={() => this.getNum('0')} className="calc-number bigger-btn">0</CalcButton>
            <CalcButton onClick={() => this.showNotImplemented()} className="calc-number">.</CalcButton>
            <CalcButton onClick={() => this.equal()} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
