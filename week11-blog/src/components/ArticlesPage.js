import 'isomorphic-fetch';
import React, { Component } from 'react';


class ArticlesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    // fetch here
    fetch('api/articles')
      .then(res => { return res.json(); })
      .then(json => { this.setState({ articles: json }); });
  }

  renderArticles() {
    return (
      <ul>
        { 
          this.state.articles.map((obj, index) => {
            return (
              <li key={index}>
                <a href={`#/articles/${obj._id}`}>{obj.title}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            { this.renderArticles() }
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesPage;
