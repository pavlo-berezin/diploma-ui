import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from 'redux-thunk';

export const getStore = () => createStore(rootReducer, applyMiddleware(thunk));
