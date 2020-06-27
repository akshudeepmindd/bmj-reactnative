import * as User from '../actionTypes/usersActionsTypes';
import * as UsersAPI from '../../services/users';
import {PURGE} from 'redux-persist';
import {AsyncStorage, ToastAndroid} from 'react-native';

export const createUsers = params => async dispatch => {
  const res = await UsersAPI.createUsers (params);
  dispatch ({
    type: User.CREATE_USERS,
    payload: res.data,
  });
  return res;
};

export const BasicDetails = params => async dispatch => {
  dispatch ({
    type: User.BASIC_DETAILS,
    payload: params,
  });
};
export const ProffesionalDetails = params => async dispatch => {
  dispatch ({
    type: User.PROFFESSIONA_DETAIL,
    payload: params,
  });
};
export const loginUsers = params => async dispatch => {
  const res = await UsersAPI.loginUsers (params);
  if (res.data.status == 1) {
    saveDataToStorage (res.data.data.token, res.data.data.user.email);
    dispatch ({
      type: User.LOGIN_USERS,
      payload: res.data,
    });
    return res.data;
  } else {
    ToastAndroid.showWithGravity (
      res.data.message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }
};

export const EditUserDetails = (params, token) => async dispatch => {
  const res = await UsersAPI.EditUser (params, token);
  dispatch ({
    type: User.EDIT_DETAIL,
    payload: res.data,
  });
  return res.data;
};

export const changePassword = (params, token) => async dispatch => {
  const res = await UsersAPI.ChangePassword (params, token);
  dispatch ({
    type: User.CHANGE_PASSWORD,
    payload: res.data,
  });
  return res.data;
};

export const authenticate = (email, token) => {
  return {type: User.AUTHENTICATE, email: email, token: token};
};

const saveDataToStorage = (token, email) => {
  AsyncStorage.setItem (
    'userData',
    JSON.stringify ({
      token: token,
      email: email,
    })
  );
};

export const logout = () => {
  AsyncStorage.removeItem ('userData');
  return {type: User.LOGOUT};
};
