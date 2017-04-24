import React, { Component } from 'react'
import Article from '../components/Article'

export default class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: []};
  }

  loadData() {
    fetch('article')
      .then(response => response.json())
      .then(response => {
        this.setState({
          articles: response.articles
        });
      })
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
      return (
        <div>
          {this.state.articles.map((article, index) =>
            <div>
              <Article
                {...article} id={article._id} key={index}
              />
              <hr/>
            </div>
          )}
        </div>
      )
  }
}