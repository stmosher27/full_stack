import * as APIUtil from '../util/session_api_util';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_LOGOUT_SUCCESS = 'RECEIVE_LOGOUT_SUCCESS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLogoutSuccess = () => ({
  type: RECEIVE_LOGOUT_SUCCESS,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});

export const login = user => dispatch => (
  APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null))
  )
);
