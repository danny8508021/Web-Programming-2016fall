import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header"> {this.props.children} </div>
    );
  }
}

module.exports = Header;
