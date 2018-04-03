import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user, invitation: {} } : { invitation: {} };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        user: null
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null
      };
    default:
      return state
  }
}