import 'isomorphic-fetch';
import React, { Component, PropTypes } from 'react';

class SingleArticlePage extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
      isEditing: false,
    };
  }

  componentDidMount() {
    // fetch with id
    const id = window.location.hash.substr(1).split('/articles/')[1];
    fetch(`api/articles/${id}`)
      .then(res => { return res.json(); })
      .then(json => { this.setState({ title: json.title, content: json.content, tags: json.tags }); });
  }

  componentDidUpdate() {
    // fetch with id
  }

  handleTagsChange = () => {};

  handleTitleChange = () => {};

  handleDelClick = () => {};

  handleEditClick = () => {};

  renderTitle = () => {
    return (
      <h1>{this.state.title}</h1>
    );
  };

  renderTags = () => {
    return this.state.tags.map((obj, index) => {
      return <div style={{display: 'inline', color: 'green', padding: '5px'}}
                  key={index}>{obj}</div>;
    });
  };

  renderContent = () => {
    return (
      <p>{this.state.content}</p>
    );
  };

  render() {
    const { isEditing } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              {this.renderTitle()}
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            {this.renderTags()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {this.renderContent()}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-info"
              role="button"
              onClick={this.handleEditClick}
            >{isEditing ? '確認' : '編輯'}</button>
            {isEditing ? null :
            <button
              className="btn btn-warning"
              role="button"
              onClick={this.handleDelClick}
            >刪除</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleArticlePage;
