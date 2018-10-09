import { LOGIN, SIGNUP, FETCH_CURRENT_USER, LOGIN_SUCCESS, SIGNUP_SUCCESS, FETCH_CURRENT_USER_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, SIGNUP_FAIL, FETCH_CURRENT_USER_FAIL, LOGOUT_FAIL, LOGOUT } from "../helpers/actionTypes";


const defaultState = {
  data: null,
  fetching: false,
  error: null
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
    case LOGOUT:
    case FETCH_CURRENT_USER:
      return { ...state, fetching: true };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, error: null, fetching: false, data: action.user };
    case LOGOUT_SUCCESS:
      return { ...state, error: null, data: null, fetching: false };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case FETCH_CURRENT_USER_FAIL:
    case LOGOUT_FAIL:
      return { ...state, fetching: false, error: action.error }
    default:
      return state;
  }
}

export const isAuthFetching = (state) => state.fetching; 
export const getAuthedUser = (state) => state.data;
export const getAuthError = (state) => state.error;
