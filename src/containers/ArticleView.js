import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, fetchArticleDetails } from '../actions/articles';
import { setCategories } from '../actions/categories';
import Article from '../components/Article';
import { getArticle } from '../reducers';
import '../styles/article-view.scss';

class ArticleView extends Component {

  componentWillMount() {
    const { fetchArticleDetails, match } = this.props;
    fetchArticleDetails(match.params.id);
  }

  onDeleteArticleClick(article) {
    this.props.deleteArticle(article._id);
    this.goToHomePage();
  }

  goToHomePage() {
    this.props.history.push('/');
  }

  onBadgeClick(category) {
    this.props.setCategories([category]);
    this.goToHomePage();
  }

  render() {
    const { article } = this.props;
    console.log('render', article)
    if (!article) { return null; }
    return (
      <div className="article-view">
        <span className="delete-btn" onClick={() => this.onDeleteArticleClick(article)}>Delete</span>
        <Article
          {...article} id={article._id} key={article._id}
          onBadgeClick={(category) => this.onBadgeClick(category)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const article = getArticle(props.match.params.id, state);
  return { article }
}

const mapDispatchToProps = (dispatch) => ({
  fetchArticleDetails: (id) => dispatch(fetchArticleDetails(id)),
  deleteArticle: (article) => dispatch(deleteArticle(article)),
  setCategories: (categories) => dispatch(setCategories(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
