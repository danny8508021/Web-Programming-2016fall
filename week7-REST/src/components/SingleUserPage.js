import React, { Component, PropTypes } from 'react';


class SingleUserPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
    }
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    // fetch `/api/users/${id}` to get user and then set state...
    fetch(`/api/users/${this.props.id}`)
      .then(res => { return res.json(); })
      .then(json => { this.setState({ name: json.name, age: json.age }); });
  }

  render() {
    return <div>User {this.props.id} name: {this.state.name} age: {this.state.age}</div>;
  }
}

export default SingleUserPage;
