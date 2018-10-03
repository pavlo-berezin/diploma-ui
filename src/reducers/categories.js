import { ADD_CATEGORY, REMOVE_CATEGORY, CLEAR_CATEGORIES } from "../helpers/actionTypes";

export const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.category]
    case REMOVE_CATEGORY:
      return state.filter(el => el !== action.category);
    case CLEAR_CATEGORIES:
      return [];
  }
};
