import { ADD_CATEGORY, REMOVE_CATEGORY, CLEAR_CATEGORIES, SET_CATEGORIES } from "../helpers/actionTypes";

export const setCategories = (categories) => ({ type: SET_CATEGORIES , categories });
export const addCategory = (category) => ({ type: ADD_CATEGORY, category });
export const removeCategory = (category) => ({ type: REMOVE_CATEGORY, category });
export const clearCategories = () => ({ type: CLEAR_CATEGORIES });
