import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle, saveArticleFile } from '../actions/articles';
import ArticleForm from '../components/ArticleForm';
import { getAuthedUser } from '../reducers';


class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(article) {
    const articleRequest = {
      ...article,
      author: this.props.user && this.props.user._id
    };

    const method = articleRequest.article ? this.props.saveArticleFile : this.props.saveArticle;

    method(articleRequest);

    // this.props.history.push('/');
  }

  render() {
    return (
      <ArticleForm onSubmit={this.handleSubmit}></ArticleForm>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: getAuthedUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  saveArticle: (article) => dispatch(saveArticle(article)),
  saveArticleFile: (article) => dispatch(saveArticleFile(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
