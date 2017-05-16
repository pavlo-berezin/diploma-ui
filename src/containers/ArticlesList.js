import React, { Component } from 'react'
import Article from '../components/Article'
import { Link } from 'react-router-dom'
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
        <div className="articles-list">
            {this.state.articles.map((article, index) =>
                <div key={article._id} className="article-container">
                    <Article {...article} id={article._id}/>
                    <Link to={'/article/' + article._id} key={index} className="more-link">Go to article</Link>
                </div>
            )}
        </div>
      )
  }
}
