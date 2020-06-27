import * as User from '../actionTypes/usersActionsTypes';
import {PURGE} from 'redux-persist';
export default (state = {user: '', isLoggedIn: false}, action) => {
  switch (action.type) {
    case User.CREATE_USERS:
      return {
        ...state,
        user: action.payload,
      };
    case User.LOGIN_USERS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case User.BASIC_DETAILS:
      return {
        ...state,
        basic: action.payload,
      };
    case User.PROFFESSIONA_DETAIL:
      return {
        ...state,
        proffessional: action.payload,
      };
    case User.EDIT_DETAIL:
      return {
        ...state,
        editDetail: action.payload,
      };
    case User.CHANGE_PASSWORD:
      return {
      ...state,
      changePassword: action.payload
    }
    default:
      return state;
  }
};
