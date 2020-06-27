import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS, SIZE, widthPercentageToDP} from '../../constants/styles';
import SimpleLayout from '../simpleLayout';
import TextField from '../Common/TextInput';
import RadioButton from '../Common/RadioButton';
import {createUsers} from '../Redux/actions/usersActions';
import * as DocumentPicker from 'expo-document-picker';

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

class ProfessionalDetail extends Component {
  state = {
    gstNumber: '',
    gstDocument: '',
    address1: '',
    city: '',
    pinCode: '',
    state: '',
    country: '',
    photoUrl: '',
    shopName: '',
    email: '',
  };

  getDocumentPicker = async name => {
    let result = await DocumentPicker.getDocumentAsync ();
    console.log (name, '-', result, 'magesss');
    this.setState ({
      [name]: result,
    });
  };

  onChangeText = async (text, name) => {
    this.setState ({
      [name]: text,
    });
  };

  onSubmit = async () => {
    const {
      gstDocument,
      gstNumber,
      photoUrl,
      address1,
      city,
      pinCode,
      state,
      shopName,
      email,
      country,
    } = this.state;
    const {confirmPassword, first_name, mobileNumber, password} =
      this.props.basic && this.props.basic.basic;
    let params = {
      gstNumber,
      address1,
      city,
      country,
      pinCode,
      state,
      shopName,
      email,
      first_name,
      mobileNumber,
      password,
      photoUrl: null,
      gstDocument: null,
    };
    const response = await this.props.createUsers (params);
    console.log (response.data);
    if (response.data.status == 1) {
      ToastAndroid.showWithGravity (
        'Retailer registered SuccessFully',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER //can be SHORT, LONG
      );
      this.props.navigation.navigate ('Home');
    }
  };

  render () {
    return (
      <KeyboardAwareScrollView enableAutomaticScroll={true}>
        <SimpleLayout>
          <View style={styles.responsiveContainer}>
            <View style={styles.container}>
              <View>
                <Text style={styles.textColor}>
                  SOME MORE &nbsp;
                  <Text style={styles.innerText}>DETAILS ABOUT YOU </Text>
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
                      width: widthPercentageToDP ('50%'),
                    }}
                  />
                </View>
              </View>
              <View style={styles.formContainer}>
                <View style={styles.radioButton}>
                  <RadioButton options={options} />
                </View>
                <View
                  style={{
                    flex: 1,
                    position: 'relative',
                  }}
                >
                  <View style={{flex: 1}}>
                    <TextField
                      style={styles.textInput2}
                      inlineImagePadding={2}
                      placeholder="Enter Your GST Number..."
                      onChangeText={text =>
                        this.onChangeText (text, 'gstNumber')}
                    />
                  </View>
                  {/* <View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
                        padding: 6,
                        marginTop: 0,
                        borderRadius: 8,
                        position: 'absolute',
                        right: 20,
                        bottom: 32,
                      }}
                      onPress={() => this.getDocumentPicker ('gstDocument')}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        Upload PDF
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                </View>
                <TextField
                  style={styles.textInput}
                  inlineImagePadding={2}
                  placeholder="Your Shope Name"
                  onChangeText={text => this.onChangeText (text, 'shopName')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="Your Email"
                  onChangeText={text => this.onChangeText (text, 'email')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="Your Complete Address"
                  onChangeText={text => this.onChangeText (text, 'address1')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="- Select Country -"
                  onChangeText={text => this.onChangeText (text, 'country')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="- Select State -"
                  onChangeText={text => this.onChangeText (text, 'state')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="- Select City -"
                  onChangeText={text => this.onChangeText (text, 'city')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="PINCODE"
                  onChangeText={text => this.onChangeText (text, 'pincode')}
                />
                <View style={styles.imageContainer}>
                  <View>
                    <TouchableOpacity
                      style={styles.circle}
                      onPress={() => this.getDocumentPicker ('photoUrl')}
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
                      onPress={() => this.getDocumentPicker ('photoUrl')}
                    >
                      <Text style={{fontSize: 15, color: '#fff'}}>
                        Upload Profile Picture
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
                      padding: 10,
                      marginTop: 2,
                      marginBottom: 10,
                      borderRadius: 10,
                    }}
                    onPress={this.onSubmit}
                  >
                    <Text style={{fontSize: 20, color: '#fff'}}>
                      Submit Details and Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SimpleLayout>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = state => ({
  basic: state.user,
});
const mapDispatchToProps = {
  createUsers,
};
export default connect (mapStateToProps, mapDispatchToProps) (
  ProfessionalDetail
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
    marginTop: 40,
    alignItems: 'center',
  },
  textInput: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRadius: 50,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 15,
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
  buttonContainer: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: 35,
    height: 35,
    marginTop: 6,
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
});
