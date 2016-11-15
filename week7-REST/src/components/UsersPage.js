import React, { Component } from 'react';

import 'babel-polyfill';
import fetch from 'isomorphic-fetch';

class UsersPage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    // fetch `/api/users` to get users and then set state...
    fetch('/api/users')
      .then(res => { return res.json(); })
      .then(json => { this.setState({ users: json.users }); });
  }

  userList() {
    return this.state.users.map((obj, index) => {
      const ref = '#/users/' + (index+1).toString();
      return <li key={index}><a href={ref}>User {index + 1}</a></li>
    })
  }

  render() {
    return (
      <div>Users
        {this.userList()}
      </div>
    );
  }
}

export default UsersPage;
