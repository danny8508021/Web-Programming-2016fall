import 'isomorphic-fetch';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 'react-quill'
// 'react-tagsinput'

class CreateArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      tags: [],
    };
  }

  handleSubmitClick = () => {
    const confirm = window.confirm('確定要新增文章嗎？');
    if (confirm) {
      // fetch here
      const my = this;
      
      this.setState({
        title: this.refs.titleName.value,
        content: this.refs.articleContent.value,
        tags: [this.refs.tagsName.value],
      }, () => {
        console.log(my.state);
        fetch('/api/articles', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(my.state),
        })
        .then(res => { return res.json(); })
        .then(json => {
          my.refs.titleName.value = '';
          my.refs.articleContent.value = '';
          my.refs.tagsName.value = '';
          console.log('reponse from server: ', json);
        });
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-info pull-right"
              role="button"
              onClick={this.handleSubmitClick}
            >送出</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* title */}
            <form action="">
              <label htmlFor="title-name">標題:</label>
              <input id="title-name" ref="titleName" type="text"/>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* tags */}
            <form action="">
              <label htmlFor="tags-name">標籤:</label>
              <input id="tags-name" ref="tagsName" type="text"/>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* content */}
            <form action="">
              <label htmlFor="artile-content">文章內容:</label>
              <input id="article-content" ref="articleContent" type="text"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateArticlePage;
