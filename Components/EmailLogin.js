import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Touchable,
  Image,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZE, widthPercentageToDP} from '../constants/styles';
import {loginUsers, UserLogout} from './Redux/actions/usersActions';
import CommonLayout from './topLayout';
import TextField from './Common/TextInput';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import {PURGE} from 'redux-persist';
import * as authActions from './Redux/actions/usersActions';

class LoginWithEmail extends Component {
  state = {
    username: '',
    password: '',
    isLoading: false,
  };

  async componentDidMount () {
    const {UserLogout, user} = this.props;
    if (user) {
      await authActions.logout ();
    }
  }
  onchangeText = (value, name) => {
    this.setState ({
      [name]: value,
    });
  };

  onLogin = async () => {
    const {username, password} = this.state;
    const {loginUsers} = this.props;
    if (username == '' || password == '') {
      ToastAndroid.showWithGravity (
        "Username or password can't be empty",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER //can be SHORT, LONG
      );
    } else {
      let params = {username, password, group: 'retailer'};
      let loginResponse = await loginUsers (params);
      if (loginResponse.status == 1) {
        let data = JSON.stringify (loginResponse.data.user);
        ToastAndroid.showWithGravity (
          'You are Logged In SuccessFully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER //can be SHORT, LONG
        );

        this.props.navigation.navigate ('Dashboard');
      } else {
        ToastAndroid.showWithGravity (
          loginResponse.message,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER //can be SHORT, LONG
        );
      }
    }
  };

  render () {
    return (
      <CommonLayout>
        {/* <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={50}> */}
          <View style={styles.container}>
            <View>
              <Text style={styles.textColor}>
                LOG INTO <Text style={styles.innerText}>YOUR ACCOUNT</Text>
              </Text>
              <View
                style={{
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    borderBottomColor: '#000',
                    borderBottomWidth: 2,
                    width: widthPercentageToDP ('28%'),
                  }}
                />
              </View>
            </View>
            <View style={styles.formContainer}>
              <View style={styles.boxContainer}>
                <View>
                  <Image
                    style={{
                      width: 20,
                      height: 28,
                    }}
                    source={require ('../assets/images/phone.png')}
                  />
                </View>
                <View>
                  <TextField
                    style={styles.textInput}
                    placeholder="Enter Your Mobile Number or Email Id"
                    onChangeText={value =>
                      this.onchangeText (value, 'username')}
                  />
                </View>
              </View>
              <View style={styles.boxContainer}>
                <View>
                  <Image
                    style={{
                      width: 20,
                      height: 28,
                    }}
                    source={require ('../assets/images/lock.png')}
                  />
                </View>
                <View>
                  <TextField
                    style={styles.textInput}
                    placeholder="Enter Your Password"
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={value =>
                      this.onchangeText (value, 'password')}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.onLogin}>
                  <Ionicons
                    name="md-arrow-forward"
                    size={40}
                    iconStyle={styles.iconStyle}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={styles.signUpText}
                onPress={() => this.props.navigation.navigate ('OTPLogin')}
              >
                Or, Sign In Using OTP
              </Text>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate ('Signup')}
                >
                  <Text style={styles.signUpText2}>SignUp</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        {/* </KeyboardAvoidingView> */}
      </CommonLayout>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  loginUsers,
  UserLogout,
};

export default connect (mapStateToProps, mapDispatchToProps) (LoginWithEmail);

const styles = StyleSheet.create ({
  container: {
    // flex: 1,
    flexDirection: 'column',
  },
  textColor: {
    flexWrap: 'wrap',
    color: '#000',
    paddingTop: 25,
    textAlign: 'center',
    marginTop: 30,
    fontSize: SIZE.MINLARGE,
    padding: 2,
  },
  innerText: {
    fontWeight: 'bold',
  },
  formContainer: {
    // marginTop: 40,
    alignItems: 'center',
    paddingTop: 50,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexWrap: 'wrap',
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRadius: 50,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    width: 300,
    color: '#000',
  },

  textInput: {
    textAlign: 'left',
    fontSize: 13,
    paddingLeft: 10,
  },
  iconStyle: {
    borderColor: '#000',
    borderWidth: 30,
  },
  buttonContainer: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: 50,
    height: 50,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
  },
  signUpText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    // marginTop: 10,
    fontSize: SIZE.MEDIUM,
  },
  signUpText2: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    // marginTop: 10,
    fontSize: SIZE.MEDIUM,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
  },
  bottomContainer: {
    flex: 1 / 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  forgotText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    fontSize: SIZE.MEDIUM,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
  },
});
