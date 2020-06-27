import {AsyncStorage} from 'react-native';
import {persistReducer} from 'redux-persist';

import {combineReducers} from 'redux';
import userReducer from './userReducer';
import categoryReducer from './categoryReducer';

const authPresistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['basic', 'proffessional', 'editDetail'],
};

export default combineReducers ({
  user: persistReducer (authPresistConfig, userReducer),
  category: categoryReducer,
});
