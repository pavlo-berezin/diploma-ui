import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveArticle } from '../actions/articles';
import ArticleForm from '../components/ArticleForm';
import { getAuthedUser } from '../reducers';


class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(article) {
    this.props.saveArticle({
      ...article,
      author: this.props.user && this.props.user._id
    });

    // this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ArticleForm onSubmit={this.handleSubmit}></ArticleForm>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: getAuthedUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  saveArticle: (article) => dispatch(saveArticle(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
