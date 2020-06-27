import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Touchable,
  Image,
} from 'react-native';
import {COLORS, SIZE} from '../constants/styles';
import CommonLayout from './topLayout';
import {connect} from 'react-redux';
import TextField from './Common/TextInput';
import {Ionicons} from '@expo/vector-icons';
import TopBar from './Common/MenuBar';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {changePassword} from './Redux/actions/usersActions';
import CommonBottomLayout from './Common/CommonBottomLayout';

class ChangePassword extends Component {
  state = {
    oldPassword: '',
    newPassword: '',
  };

  onchangeText = (value, name) => {
    this.setState ({
      [name]: value,
    });
  };

  onChangePassword = async () => {
    const {oldPassword, newPassword} = this.state;
    const {changePassword} = this.props;
    if (oldPassword == '' || newPassword == '') {
      ToastAndroid.showWithGravity (
        'Old Password or New Password field is empty',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER //can be SHORT, LONG
      );
    } else {
      let params = {oldPassword, newPassword};
      let token = this.props.user.user.data.token;
      let ChangePasswordResponse = await changePassword (params, token);
      console.log (ChangePasswordResponse, 'reponsees');
      // let data = JSON.stringify (ChangePasswordResponse.data.user);
      if (ChangePasswordResponse.status == 1) {
        ToastAndroid.showWithGravity (
          'Password Updated SuccessFully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER //can be SHORT, LONG
        );

        this.props.navigation.navigate ('MyAccount');
      }
    }
  };

  render () {
    return (
      <TopBar {...this.props}>
        <View style={styles.container}>
          <View>
            <View>
              <Text style={styles.textColor}>Change Password</Text>
            </View>
            <View>
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
                    placeholder="Old Password"
                    onChangeText={value =>
                      this.onchangeText (value, 'oldPassword')}
                    secureTextEntry={true}
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
                    placeholder="New Password"
                    onChangeText={value =>
                      this.onchangeText (value, 'newPassword')}
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: `center`,
                padding: 10,
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={styles.shopping}
                  onPress={this.onChangePassword}
                >
                  <Text
                    style={{
                      color: `${COLORS.MAINCOLOR.BLUE}`,
                      textAlign: `center`,
                    }}
                  >
                    Update Password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TopBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  changePassword,
};

export default connect (mapStateToProps, mapDispatchToProps) (ChangePassword);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexDirection: "column"
  },
  textColor: {
    color: '#000',
    fontSize: 18,
    paddingBottom: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // alignContent: "flex-start",
    flexWrap: 'wrap',
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRadius: 50,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 20,
    padding: 8,
    borderWidth: 1,
    width: 300,
    color: '#000',
  },
  textInput: {
    color: '#000',
    textAlign: 'left',
    paddingLeft: 10,
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP ('50%'),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
});
