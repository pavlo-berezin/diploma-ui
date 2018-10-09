import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../actions/articles';
import { fetchCurrentUser } from '../actions/auth';
import { addCategory } from '../actions/categories';
import Article from '../components/Article';
import SearchList from '../containers/SearchList';
import { getAllArticles, getAuthedUser, isAuthFetching } from '../reducers';
import '../styles/articles-list.scss';

class ArticlesList extends Component {
  componentWillMount() {
    this.props.fetchArticles();

    if (!this.props.user) {
      this.props.fetchCurrentUser();
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.props.isAuthFetching && !this.props.user) {
      this.props.history.push('/login');
    }
  }

  onBadgeClick(category) {
    this.props.addCategory(category);
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="articles-list-container">
        <div className="search-list-container">
          <SearchList/>
        </div>
        <div className="articles-list">
          {articles.map((article, index) =>
            <div key={article._id} className="article-container">
              <Article {...article} id={article._id} onBadgeClick={(badge) => this.onBadgeClick(badge)} hideBody={true} />
              <Link to={'/article/' + article._id} key={index} className="more-link">Go to article</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  articles: getAllArticles(state),
  isAuthFetching: isAuthFetching(state),
  user: getAuthedUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
  addCategory: (category) => dispatch(addCategory(category)),
  fetchCurrentUser: () => dispatch(fetchCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);





