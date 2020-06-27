import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {COLORS, SIZE} from '../../constants/styles';
import TextField from '../Common/TextInput';
import {Ionicons} from '@expo/vector-icons';
import TopBar from '../Common/MenuBar';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {createUsers} from '../Redux/actions/usersActions';
import {ScrollView} from 'react-native-gesture-handler';

class EditAddressBook extends Component {
  state = {
    address1: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
  };

  onChangeText = async (text, name) => {
    this.setState ({
      [name]: text,
    });
  };

  onSubmit = async () => {
    const {address1, country, state, city, pinCode} = this.state;

    let params = {
      address1,
      country,
      state,
      city,
      pinCode,
    };
    const response = await this.props.createUsers (params);
    console.log (response.data);
    if (response.data.status == 1) {
      ToastAndroid.showWithGravity (
        'Address Update SuccessFully',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER //can be SHORT, LONG
      );
      this.props.navigation.navigate ('MyAccount');
    }
  };

  render () {
    return (
      <TopBar {...this.props}>
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Text style={styles.textColor}>Edit Address Book</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={styles.formContainer}>
                <TextField
                  style={styles.textInput}
                  placeholder="PEP Animation Studio, 325, Gali Devidas, Nadari Gali"
                  onChangeText={text => this.onChangeText (text, 'address1')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="India"
                  onChangeText={text => this.onChangeText (text, 'country')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="Uttar Pradesh"
                  onChangeText={text => this.onChangeText (text, 'state')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="Kasgan"
                  onChangeText={text => this.onChangeText (text, 'city')}
                />
                <TextField
                  style={styles.textInput}
                  placeholder="207127"
                  onChangeText={text => this.onChangeText (text, 'pincode')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'stretch',
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    marginRight: 10,
                  }}
                >
                  <TouchableOpacity
                    style={styles.addtocart}
                    onPress={this.onSubmit}
                  >
                    <Text style={styles.cartText}>Edit Address</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <TouchableOpacity style={styles.addtocart}>
                    <Text style={styles.buyText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={styles.ButtonContainer}
                onPress={() => this.props.navigation.navigate ('MyAccount')}
              >
                <Text style={styles.Buttontext}>Update Address</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TopBar>
    );
  }
}

const mapStateToProps = state => ({
  editAddress: state.user,
});
const mapDispatchToProps = {
  createUsers,
};
export default connect (mapStateToProps, mapDispatchToProps) (EditAddressBook);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textColor: {
    color: '#000',
    textAlign: 'left',
    fontSize: 18,
    paddingLeft: 20,
  },
  innerText: {
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 30,
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
    padding: 5,
    borderWidth: 1,
    width: 300,
    color: '#000',
    textAlign: 'left',
    paddingLeft: 25,
  },
  ButtonContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthPercentageToDP ('36%'),
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    // width: widthPercentageToDP('50%')
  },
  Buttontext: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    textAlign: 'center',
  },
  addtocart: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: widthPercentageToDP('36%'),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    width: widthPercentageToDP ('40%'),
  },
  buynow: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: widthPercentageToDP('36%'),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    width: widthPercentageToDP ('35%'),
  },
  cartText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
  },
  buyText: {
    textAlign: 'center',
    color: `${COLORS.MAINCOLOR.BLUE}`,
  },
});
