import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // see "Merge Process" section for details.
  whitelist: ['user'],
};

const pReducer = persistReducer (persistConfig, rootReducer);

export const store = createStore (
  pReducer,
  initialState,
  applyMiddleware (thunkMiddleware)
);

export const persistor = persistStore (store);
