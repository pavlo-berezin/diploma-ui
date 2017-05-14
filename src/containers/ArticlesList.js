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

  onDeleteArticleClick(article) {
      console.log('The button was clicked.');
      console.log(article);
      this.deleteData(article);
  }

  deleteData(payload) {
      fetch(`/article/${payload._id}`,{method: 'DELETE'})
        .then((res) => res.json())
        .then((data) => { this.loadData() })
  }

  render() {
      return (
        <div>
            {this.state.articles.map((article, index) =>
                <div>
                    <button onClick={ () => this.onDeleteArticleClick(article)} key={index}>delete</button>
                    <Article
                        {...article} id={article._id} key={article._id}
                    />
                    <hr/>
                </div>
            )}
        </div>
      )
  }
}
