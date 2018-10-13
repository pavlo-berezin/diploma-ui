import { ADD_CATEGORY, REMOVE_CATEGORY, CLEAR_CATEGORIES, SET_CATEGORIES, FETCH_CATEGORIES, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL } from "../helpers/actionTypes";

export const setCategories = (categories) => ({ type: SET_CATEGORIES, categories });
export const addCategory = (category) => ({ type: ADD_CATEGORY, category });
export const removeCategory = (category) => ({ type: REMOVE_CATEGORY, category });
export const clearCategories = () => ({ type: CLEAR_CATEGORIES });
export const fetchCategoriesStart = () => ({ type: FETCH_CATEGORIES });
export const fetchCategoriesSuccess = (data) => ({ type: FETCH_CATEGORIES_SUCCESS, data });
export const fetchCategoriesFail = (error) => ({ type: FETCH_CATEGORIES_FAIL, error });

export const fetchCategories = (query) => async dispatch => {
  dispatch(fetchCategoriesStart())

  const url = `/category/?q=${query}`;
  const response = await (await fetch(url)).json();

  if (response.status === 'OK') {
    const categories = response.categories || [];
    dispatch(fetchCategoriesSuccess(categories));
  } else {
    dispatch(fetchCategoriesFail(response.error));
  }
}
