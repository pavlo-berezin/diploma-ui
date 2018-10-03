import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from 'redux-thunk';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const getStore = () => createStore(rootReducer,
                                          devToolsExtension,
                                          applyMiddleware(thunk));
