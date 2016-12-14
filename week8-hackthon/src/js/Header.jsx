import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav id="head-bar" className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header col-md-3">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a id="brand" className="navbar-brand" href="/">{this.props.children}</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/"> exam </a></li>
              <li><a href="/"> slide </a></li>
              <li><a href="/"> e-Book </a></li>
              <li><a href="/"> note </a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = Header;
