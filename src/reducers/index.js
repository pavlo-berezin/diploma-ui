import { combineReducers } from "redux";
import { articles } from "./articles";
import { categories } from "./categories";

export const rootReducer = combineReducers(articles, categories);
