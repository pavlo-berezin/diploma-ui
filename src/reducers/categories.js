import { ADD_CATEGORY, REMOVE_CATEGORY, CLEAR_CATEGORIES, SET_CATEGORIES, FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from "../helpers/actionTypes";
import { combineReducers } from 'redux';

const selectedCategories = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    case ADD_CATEGORY:
      return ~state.indexOf(action.category) ? [...state] : [...state, action.category];
    case REMOVE_CATEGORY:
      return state.filter(el => el !== action.category);
    case CLEAR_CATEGORIES:
      return [];
    default:
      return state;
  }
};
const initialState = { data: [], error: null, fetching: false };

const asyncCategories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return { ...state, fetching: true };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, data: action.data, error: null, fetching: false }
    case FETCH_CATEGORIES_FAIL:
      return { ...state, data: [], error: action.error, fetching: false }
    default:
      return state;
  }
}

export default combineReducers({ selectedCategories, asyncCategories });

export const getCategories = state => state.selectedCategories;
export const getAsyncCategories = state => state.asyncCategories.data;
export const asyncCategoriesFetching = state => state.asyncCategories.fetching;
export const asyncCategoriesError = state => state.asyncCategories.error;
