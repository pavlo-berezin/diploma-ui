import React, { Component } from 'react'
import Article from '../components/Article'

export default class ArticlesView extends Component {
  constructor(props) {
    super(props);
    this.state = {article: {}};
  }

  loadData() {
        let id = this.props.match.params.id;
        console.log(id)
        fetch(`/article/${id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    article: response.article
                });
            })
  }

  componentWillMount() {
    this.loadData();
  }

  onDeleteArticleClick(article) {
      this.deleteData(article);
  }

  deleteData(payload) {
      fetch(`/article/${payload._id}`,{method: 'DELETE'})
        .then((res) => res.json())
        .then((data) => {
            if(data.status === 'OK') {
                this.props.history.push('/')
            }
        })
  }

  render() {
      return (
        <div>
            <Article
                {...this.state.article} id={this.state.article._id} key={this.state.article._id}
            />
            <hr/>
            <button onClick={ () => this.onDeleteArticleClick(this.state.article)}>delete</button>
        </div>
      )
  }
}
