import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles';
import { addCategory, setCategories, fetchCategories } from '../actions/categories';
import { getAllArticles, getCategories, getAsyncCategories, asyncCategoriesFetching } from '../reducers';
import '../styles/home-page.scss';
import ArticlesSearch from '../components/ArticlesSearch';
import ArticlesGrid from './ArticlesGrid';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  onBadgeClick(category) {
    this.props.addCategory(category);
  }

  onCategorySearch(query) {
    this.props.fetchCategories(query);
  }

  onCategoriesChange(categories) {
    this.props.setCategories(categories);
  }

  onCategorySelect(category) {
    console.log(category);
    this.props.addCategory(category);
  }

  render() {
    const { articles, categories, asyncCategories, asyncCategoriesFetching } = this.props;
    return (
      <div className="home-page-container">
        <ArticlesSearch categories={categories}
                        asyncCategories={asyncCategories}
                        asyncCategoriesFetching={asyncCategoriesFetching}
                        onCategorySearch={(query) => this.onCategorySearch(query)}
                        onCategoriesChange={(category) => this.onCategoriesChange(category)}
                        />
        <ArticlesGrid articles={articles}
                      onCategorySelect={(category) => this.onCategorySelect(category)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: getAllArticles(state),
  categories: getCategories(state),
  asyncCategories: getAsyncCategories(state),
  asyncCategoriesFetching: asyncCategoriesFetching(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
  addCategory: (category) => dispatch(addCategory(category)),
  setCategories: (categories) => dispatch(setCategories(categories)),
  fetchCategories: (query) => dispatch(fetchCategories(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
