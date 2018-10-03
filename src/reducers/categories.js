import { ADD_CATEGORY, REMOVE_CATEGORY, CLEAR_CATEGORIES } from "../helpers/actionTypes";

const categories = (state = [], action) => {
  switch (action.type) {
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

export default categories;

export const getCategories = state => state;

