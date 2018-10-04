import { combineReducers } from 'redux'
import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLE_DETAILS_SUCCESS,
  FETCH_ARTICLES,
  FETCH_ARTICLE_DETAILS,
  FETCH_ARTICLE_DETAILS_FAIL,
  FETCH_ARTICLES_FAIL,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_FAIL,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAIL,
  SAVE_ARTICLE
} from '../helpers/actionTypes';

export const data = (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return action.articles;
    case FETCH_ARTICLE_DETAILS_SUCCESS:
    case SAVE_ARTICLE_SUCCESS:
      const { article } = action;
      // TODO: REMOVE THIS BY FIXING SAVING API.
      if (!article) return state;

      const articleIndex = state.findIndex((el) => article._id === el._id);

      if (~articleIndex) {
        return state.map((el, i) => articleIndex === i ? article : el);
      }
      else {
        return [article, ...state];
      }
    case DELETE_ARTICLE_SUCCESS:
      return state.filter(el => el._id !== action.id)
    default:
      return state;
  }
}

export const fetching = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, all: true };
    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_FAIL:
      return { ...state, all: false };
    case FETCH_ARTICLE_DETAILS:
    case DELETE_ARTICLE:
    case SAVE_ARTICLE:
    return { ...state, [action.id]: true };
    case FETCH_ARTICLE_DETAILS_SUCCESS:
    case FETCH_ARTICLE_DETAILS_FAIL:
    case SAVE_ARTICLE_SUCCESS:
    case SAVE_ARTICLE_FAIL:
    case DELETE_ARTICLE_SUCCESS:
    case DELETE_ARTICLE_FAIL:
      return { ...state, [action.id]: false };
    default:
      return state;
  }
}

export const error = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, all: null };
    case FETCH_ARTICLES_FAIL:
      return { ...state, all: action.error };
    case FETCH_ARTICLE_DETAILS:
    case FETCH_ARTICLE_DETAILS_SUCCESS:
    case SAVE_ARTICLE:
    case SAVE_ARTICLE_SUCCESS:
    case DELETE_ARTICLE:
    case DELETE_ARTICLE_SUCCESS:
      return { ...state, [action.id]: null };
    case DELETE_ARTICLE_FAIL:
    case SAVE_ARTICLE_FAIL:
    case FETCH_ARTICLE_DETAILS_FAIL:
      return { ...state, [action.id]: action.error };
    default:
      return state;
  }
}

export default combineReducers({ data, fetching, error });

export const getAllArticles = state => state.data;
export const getArticle = (id, state) => state.data.find(el => el._id === id);

export const isArticlesFetching = state => state.fetching.all;
export const isArticleFetching = (id, state) => state.fetching[id];

export const getArticlesError = state => state.error.all;
export const getArticleError = (id, state) => state.error[id];

