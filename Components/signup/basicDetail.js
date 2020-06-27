import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ToastAndroid,
  KeyboardAvoidingView
} from 'react-native';
import {COLORS, SIZE, widthPercentageToDP} from '../../constants/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonLayout from '../topLayout';
import TextField from '../Common/TextInput';
import {BasicDetails} from '../Redux/actions/usersActions';
import {Ionicons} from '@expo/vector-icons';

class BasicDetail extends Component {
  state = {
    first_name: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  };
  onChangeText = (e, name) => {
    this.setState ({
      [name]: e,
    });
  };
  onSubmit = async () => {
    const {
      first_name,
      email,
      mobileNumber,
      password,
      confirmPassword,
    } = this.state;
    let params = {
      first_name,
      email,
      mobileNumber,
      password,
      confirmPassword,
    };
    if (password !== confirmPassword) {
      ToastAndroid.showWithGravity (
        'Password and Confirm Password should be Same',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      await this.props.BasicDetails (params);
      this.props.navigation.navigate ('companyDetail');
    }
  };
  render () {
    return (
      // <KeyboardAwareScrollView enableAutomaticScroll={true}>
      (
        <CommonLayout>
          <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50}>
          <ScrollView style={styles.container}>
            <View>
              <Text style={styles.textColor}>
                CREATE <Text style={styles.innerText}>ACCOUNT</Text>
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
                    source={require ('../../assets/images/phone.png')}
                  />
                </View>
                <View>
                  <TextField
                    style={styles.textInput}
                    placeholder="Your Name"
                    name="first_name"
                    onChangeText={e => this.onChangeText (e, 'first_name')}
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
                    source={require ('../../assets/images/phone.png')}
                  />
                </View>
                <View>
                  <TextField
                    style={styles.textInput}
                    placeholder="Your Mobile"
                    name="mobileNumber"
                    onChangeText={e => this.onChangeText (e, 'mobileNumber')}
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
                    source={require ('../../assets/images/lock.png')}
                  />
                </View>
                <View>
                  <TextField
                    style={styles.textInput}
                    placeholder="Create Password"
                    secureTextEntry={true}
                    name="password"
                    onChangeText={e => this.onChangeText (e, 'password')}
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
                    source={require ('../../assets/images/lock.png')}
                  />
                </View>
                <View>
                  <TextField
                    style={styles.textInput}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    name="confirmPassword"
                    onChangeText={e => this.onChangeText (e, 'confirmPassword')}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Ionicons
                  name="md-arrow-forward"
                  size={30}
                  iconStyle={styles.iconStyle}
                  color="#fff"
                  onPress={this.onSubmit}
                />
              </View>
              <Text style={styles.signUpText} onPress={this.onSubmit}>
                Proceed to Step 2
              </Text>
              <Text
                style={styles.signInText}
                onPress={() => this.props.navigation.navigate ('OTPLogin')}
              >
                Click to Sign In
              </Text>
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </CommonLayout>
      )
      // </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  textColor: {
    color: '#000',
    paddingTop: 30,
    textAlign: 'center',
    // marginTop: 10,
    fontSize: SIZE.MINLARGE,
    paddingBottom: 5,
  },
  innerText: {
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  textInput: {
    color: '#000',
    textAlign: 'left',
    paddingLeft: 10,
  },
  iconStyle: {
    borderColor: '#000',
    borderWidth: 30,
  },
  buttonContainer: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: 35,
    height: 35,
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
  },
  signUpText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 8,
    fontSize: SIZE.MEDIUM,
  },
  signInText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZE.MEDIUM,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
  },
  formContainer: {
    // marginTop: 40,
    alignItems: 'center',
    paddingTop: 40,
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
    marginBottom: 15,
    padding: 7,
    borderWidth: 1,
    width: 300,
    color: '#000',
  },
});

const mapDispatchToProps = {
  BasicDetails,
};

export default connect (null, mapDispatchToProps) (BasicDetail);
