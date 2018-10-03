import { combineReducers } from "redux";
import articles, * as fromArticles from "./articles";
import categories, * as fromCategories from "./categories";

export const rootReducer = combineReducers({ articles, categories });

export const getAllArticles = state => fromArticles.getAllArticles(state.articles);
export const getArticle = (id, state) => fromArticles.getArticle(id, state.articles);

export const isArticlesFetching = state => fromArticles.isArticlesFetching(state.articles);
export const isArticleFetching = (id, state) => fromArticles.isArticleFetching(id, state.articles);

export const getArticlesError = state => fromArticles.getArticlesError(state.articles);
export const getArticleError = (id, state) => fromArticles.getArticleError(id, state.articles);

export const getCategories = state => fromCategories.getCategories(state.categories);
