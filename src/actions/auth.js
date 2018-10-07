import { LOGIN, LOGOUT, SIGNUP, FETCH_CURRENT_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_FAIL, SIGNUP_SUCCESS, SIGNUP_FAIL, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_FAIL } from "../helpers/actionTypes";


export const loginStart = () => ({ type: LOGIN });
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
export const loginFail = (error) => ({ type: LOGIN_FAIL, error });

export const logoutStart = () => ({ type: LOGOUT });
export const logoutSuccess = () => ({ type: LOGIN_SUCCESS });
export const logoutFail = (error) => ({ type: LOGOUT_FAIL, error });

export const signupStart = () => ({ type: SIGNUP });
export const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, user });
export const signupFail = (error) => ({ type: SIGNUP_FAIL, error });

export const fetchCurrentUserStart = () => ({ type: FETCH_CURRENT_USER })
export const fetchCurrentUserSuccess = (user) => ({ type: FETCH_CURRENT_USER_SUCCESS, user })
export const fetchCurrentUserFail = (error) => ({ type: FETCH_CURRENT_USER_FAIL, error })

export const login = (username, password) => async dispatch => {
  dispatch(loginStart());

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  };

  try {
    const response = await (await fetch(`/auth/login`, options)).json();
  
    if (response.status === 'OK') {
      dispatch(loginSuccess(response.user));
    } else {
      dispatch(loginFail(response.error));
    }
  } catch (error) {
    console.log('e', error);
    dispatch(loginFail(error))
  }
}
