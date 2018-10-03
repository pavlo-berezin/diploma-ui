import { combineReducers } from 'redux'
import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLE_DETAILS_SUCCESS, FETCH_ARTICLES, FETCH_ARTICLE_DETAILS, FETCH_ARTICLE_DETAILS_FAIL, FETCH_ARTICLES_FAIL } from '../helpers/actionTypes';

export const data = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return action.articles;
    case FETCH_ARTICLE_DETAILS_SUCCESS:
      const { article } = action;
      const articleIndex = state.findIndex((el) => article.id === el.id);
      if (~articleIndex) { return state.map((el, i) => articleIndex === i ? article : el); }
      else return [ article, ...state ];
  }
}

export const fetching = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {...state, all: true};
    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_FAIL:
      return {...state, all: false};
    case FETCH_ARTICLE_DETAILS:
      return {... state, [action.id]: true};
    case FETCH_ARTICLE_DETAILS_SUCCESS:
    case FETCH_ARTICLE_DETAILS_FAIL:
      return {... state, [action.id]: false};
  }
}

export const error = (state = {}, action) => {}

export const articles = combineReducers(data, fetching, error);
