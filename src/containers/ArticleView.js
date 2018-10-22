import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, fetchArticleDetails } from '../actions/articles';
import { setCategories } from '../actions/categories';
import Article from '../components/Article';
import { getArticle } from '../reducers';
import '../styles/article-view.scss';

class ArticleView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      deleted: false
    }
  }

  componentWillMount() {
    const { fetchArticleDetails, match } = this.props;
    fetchArticleDetails(match.params.id);
  }

  componentDidUpdate() {
    if (!this.props.article && this.state.deleted) { this.goToHomePage() }
  }

  onDeleteClick(article) {
    this.props.deleteArticle(article._id);

    this.setState({
      ...this.state,
      deleted: true
    });
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
        <Article
          {...article} id={article._id} key={article._id}
          onBadgeClick={(category) => this.onBadgeClick(category)}
          onDeleteClick={() => this.onDeleteClick(article)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  article: getArticle(props.match.params.id, state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticleDetails: (id) => dispatch(fetchArticleDetails(id)),
  deleteArticle: (article) => dispatch(deleteArticle(article)),
  setCategories: (categories) => dispatch(setCategories(categories))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
