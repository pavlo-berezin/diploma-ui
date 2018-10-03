import React, { Component } from 'react'
import Article from '../components/Article'
import SearchList from '../containers/SearchList'
import { Link } from 'react-router-dom'
import '../styles/articles-list.scss'
import { getAllMovies, getCategories } from '../reducers';
import { fetchArticles } from '../actions/articles';
import connect from 'react-redux/lib/connect/connect';
import { addCategory } from '../actions/categories';

class ArticlesList extends Component {
  constructor(props) {
    super(props);

    let username = localStorage.getItem('username');
    if (!username) {
      this.props.history.push('/login')
    }
  }

  componentWillMount() {
    this.props.fetchArticles();
  }

  onBadgeClick(category) {
    this.props.addCategory(category);
  }

  render() {
    const { articles, categories } = this.props;
    return (
      <div className="articles-list-container">
        <div className="search-list-container">
          <SearchList categories={categories} />
        </div>
        <div className="articles-list">
          {articles.map((article, index) =>
            <div key={article._id} className="article-container">
              <Article {...article} id={article._id} onBadgeClick={(badge) => this.onBadgeClick(badge)} />
              <Link to={'/article/' + article._id} key={index} className="more-link">Go to article</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const articles = getAllMovies(state);
  const categories = getCategories(state);

  return { articles, categories }
}

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
  addCategory: (category) => dispatch(addCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);





