import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, AsyncStorage} from 'react-native';
import {useDispatch} from 'react-redux';

import * as authActions from '../Components/Redux/actions/usersActions';

const StartupScreen = props => {
  const dispatch = useDispatch ();

  useEffect (
    () => {
      const tryLogin = async () => {
        const userData = await AsyncStorage.getItem ('userData');
        console.log (userData, 'userdata');
        if (!userData) {
          props.navigation.navigate ('Login');
          return;
        }

        props.navigation.navigate ('Dashboard');
        dispatch (authActions.authenticate (email, token));
      };

      tryLogin ();
    },
    [dispatch]
  );

  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create ({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartupScreen;
