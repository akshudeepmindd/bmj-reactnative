import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  TextInput,
  Button,
} from 'react-native';
import Topbar from '../Common/MenuBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, SIZE, widthPercentageToDP} from '../../constants/styles';
import SimpleLayout from '../simpleLayout';
import {connect} from 'react-redux';
import {EditUserDetails} from '../Redux/actions/usersActions';
import TextField from '../Common/TextInput';
import RadioButton from '../Common/RadioButton';
import * as DocumentPicker from 'expo-document-picker';
import {Ionicons} from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TopBar from '../Common/MenuBar';

const {height} = Dimensions.get ('window');

const options = [
  {
    key: 'first',
    text: 'I am Retailer and have GST Number',
  },
  {
    key: 'second',
    text: "I am Retailer but don't have GST Number",
  },
];

class EditAccountsDetails extends Component {
  state = {
    currentUser: '',
    first_name: '',
    gstNumber: '',
    mobileNumber: '',
    email: '',
  };

  onChangeText = (text, name) => {
    this.setState ({
      [name]: text,
    });
  };

  async componentDidMount () {
    let token = this.props.user.user.data.user;
    console.log (token, 'toekeke');
    this.setState ({
      currentUser: token,
    });
  }
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState ({screenHeight: contentHeight});
  };
  getDocumentPicker = async () => {
    let result = await DocumentPicker.getDocumentAsync ();
    console.log (result);
  };

  updateProfile = async () => {
    const {
      first_name,
      gstNumber,
      mobileNumber,
      email,
      currentUser,
    } = this.state;
    let params = {
      first_name: first_name == '' ? currentUser.first_name : first_name,
      mobileNumber: mobileNumber == ''
        ? currentUser.mobileNumber
        : mobileNumber,
      email: email == '' ? currentUser.email : email,
    };
    let token = this.props.user.user.data.token;
    let updatedProfile = await this.props.EditUserDetails (params, token);
    ToastAndroid.showWithGravity (
      'Profile updated SuccessFully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER //can be SHORT, LONG
    );

    console.log (updatedProfile, 'updateddd');
    this.props.navigation.navigate ('MyAccount');
  };

  render () {
    const {currentUser} = this.state;
    console.log (currentUser.first_name, 'current');
    return (
      <TopBar {...this.props}>
        <KeyboardAwareScrollView enableAutomaticScroll={true}>
          <View style={styles.responsiveContainer}>
            <View style={styles.container}>
              <Text style={styles.textColor}>Edit Accounts Details</Text>
              <View style={styles.formContainer}>
                <TextField
                  style={styles.textInput}
                  inlineImagePadding={2}
                  placeholder={currentUser.first_name}
                  onChangeText={text => this.onChangeText (text, 'first_name')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder={currentUser.mobileNumber}
                  onChangeText={text =>
                    this.onChangeText (text, 'mobileNumber')}
                />
                <View style={styles.radioButton}>
                  <RadioButton options={options} />
                </View>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                  }}
                >
                  <View style={{flex: 2}}>
                    <TextField
                      style={styles.textInput2}
                      inlineImagePadding={2}
                      placeholder="09ASDFG1236D1ZD"
                      value={currentUser.gstNumber}
                      onChangeText={text =>
                        this.onChangeText (text, 'gstNumber')}
                    />
                  </View>
                  <View style={{flex: 1, marginTop: 10}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
                        padding: 6,
                        marginTop: 0,
                        borderRadius: 10,
                        position: 'absolute',
                        right: 20,
                        bottom: 40,
                      }}
                      onPress={this.getDocumentPicker}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        Upload PDF
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TextField
                  style={styles.textInput}
                  placeholder="PEP Animation Studios"
                />
                <TextField
                  style={styles.textInput}
                  placeholder={currentUser.email}
                  onChangeText={text => this.onChangeText (text, 'email')}
                />

                <View style={styles.imageContainer}>
                  <View>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={this.getDocumentPicker}
                    >
                      <Text>Image</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
                        padding: 10,
                        marginTop: 2,
                        borderRadius: 10,
                      }}
                      onPress={this.getDocumentPicker}
                    >
                      <Text style={{fontSize: 15, color: '#fff'}}>
                        Upload Profile Picture
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    style={styles.ButtonContainer}
                    onPress={this.updateProfile}
                  >
                    <Text style={styles.Buttontext}>Update Profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TopBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  EditUserDetails,
};

export default connect (mapStateToProps, mapDispatchToProps) (
  EditAccountsDetails
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  responsiveContainer: {
    width: widthPercentageToDP ('98%'),
  },
  textColor: {
    color: '#000',
    paddingTop: 15,
    textAlign: 'center',
    marginTop: 10,
    fontSize: SIZE.MINLARGE,
    paddingBottom: 10,
  },
  innerText: {
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  textInput: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRadius: 50,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 20,
    padding: 9,
    borderWidth: 1,
    width: 300,
    color: '#000',
    paddingLeft: 20,
  },
  textInput2: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRadius: 50,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 20,
    padding: 9,
    borderWidth: 1,
    width: 300,
    color: '#000',

    paddingLeft: 20,
  },
  iconStyle: {
    borderColor: '#000',
    borderWidth: 30,
  },
  signInText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZE.MEDIUM,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  forgotText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 20,
    fontSize: SIZE.MEDIUM,
    position: 'absolute',
    right: 0,
  },
  radioButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textColor: {
    color: '#000',
    textAlign: 'left',
    fontSize: 18,
    paddingLeft: 20,
  },
  ButtonContainer: {
    // flex: .8,
    borderWidth: 1,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 70
  },
  Buttontext: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
  },
});
