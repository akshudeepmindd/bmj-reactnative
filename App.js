import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Text} from 'react-native';
import Navigation from './Components/Navigation';
import {store, persistor} from './Components/Redux/store';
export default function App (props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation state={store.getState ('user')} {...props} />
      </PersistGate>
    </Provider>
  );
}
