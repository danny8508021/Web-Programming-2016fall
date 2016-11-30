import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav id="head-bar" className="navbar navbar-inverse navbar-static-top">
          <div className="navbar-header">
            <a id="brand" className="navbar-brand" href="/">{this.props.children}</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li><a href="/"> exam </a></li>
              <li><a href="/"> slide </a></li>
              <li><a href="/"> e-Book </a></li>
              <li><a href="/"> note </a></li>
            </ul>
          </div>
      </nav>
    );
  }
}

module.exports = Header;
