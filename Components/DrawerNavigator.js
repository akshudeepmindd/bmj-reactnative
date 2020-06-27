import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image
} from 'react-native'
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import LoginWithEmail from './EmailLogin'
import LoginWithOTP from './OtpLogin'
import Signup from './signup/basicDetail'
import Professional from './signup/proffessionalDetail'
import Category from './Category/category'
import SubCategories from './Subcategory/subcategory'
import ProductView from './product'
import CheckoutView from './Checkout/checkout'
import { heightPercentageToDP } from '../constants/styles'

const CustomDrawerComponent = props => (
  <SafeAreaView>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

export default createDrawerNavigator(
  {
    EmailLogin: {
      screen: LoginWithEmail,
      navigationOptions: {
        drawerLabel: 'Email Login',
        drawerIcon: ({ tintColor }) => <Ionicons name='user-circle' size={17} />
      }
    },
    OtpLogin: {
      screen: LoginWithOTP,
      navigationOptions: {
        drawerLabel: 'Otp Login',
        drawerIcon: ({ tintColor }) => <Ionicons name='user-circle' size={17} />
      }
    }
  },
  { drawerPosition: 'right', contentComponent: CustomDrawerComponent }
)
