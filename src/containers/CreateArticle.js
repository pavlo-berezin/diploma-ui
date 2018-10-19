import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle, saveArticleFile } from '../actions/articles';
import ArticleForm from '../components/ArticleForm';
import { getAuthedUser, isArticleFetching } from '../reducers';


class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const id = this.state.id;
    if (id && prevProps.isArticleFetching(id) === true && this.props.isArticleFetching(id) === false) {
      this.props.history.push('/');
    }
  }

  handleSubmit(article) {
    const articleRequest = {
      ...article,
      author: this.props.user && this.props.user._id
    };

    const method = articleRequest.article ? this.props.saveArticleFile : this.props.saveArticle;

    this.setState({
      ...this.state, 
      id: articleRequest.id
    });

    method(articleRequest);

    // this.props.history.push('/');
  }

  render() {
    return (
      <ArticleForm onSubmit={this.handleSubmit}></ArticleForm>
    )
  }
}

const mapStateToProps = (state) => ({
  user: getAuthedUser(state),
  isArticleFetching: (id) => isArticleFetching(id, state)
})

const mapDispatchToProps = (dispatch) => ({
  saveArticle: (article) => dispatch(saveArticle(article)),
  saveArticleFile: (article) => dispatch(saveArticleFile(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
