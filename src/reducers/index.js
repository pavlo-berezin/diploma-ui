import { combineReducers } from "redux";
import articles, * as fromArticles from "./articles";
import categories, * as fromCategories from "./categories";

export const rootReducer = combineReducers({ articles, categories });

export const getAllMovies = state => fromArticles.getAllMovies(state.articles);
export const getMovie = (id, state) => fromArticles.getMovie(id, state.articles);

export const isMoviesFetching = state => fromArticles.isMoviesFetching(state.articles);
export const isMovieFetching = (id, state) => fromArticles.isMovieFetching(id, state.articles);

export const getMoviesError = state => fromArticles.getMoviesError(state.articles);
export const getMovieError = (id, state) => fromArticles.getMovieError(id, state.articles);

export const getCategories = state => fromCategories.getCategories(state.categories);
