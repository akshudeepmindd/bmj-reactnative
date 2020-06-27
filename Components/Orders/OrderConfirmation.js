import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TopBar from '../Common/MenuBar'
import { ScrollView } from 'react-native-gesture-handler'
import { PolicyVariables } from '../../constants'
import {
  COLORS,
  widthPercentageToDP,
  heightPercentageToDP
} from '../../constants/styles'
import CommonBottomLayout from '../Common/CommonBottomLayout'
export default function OrderConfirmation (props) {
  return (
    <TopBar {...props}>
      <ScrollView>
        <CommonBottomLayout
          mainContainerStyle={styles.buttonContainer}
          buttonText={styles.buttonText}
          buttonOnPress={styles.buttonPress}
          buttonTextOnPress={styles.buttonTextOnPress}
          buttonStyle={styles.button}
          buttonTextValue='My Account'
          path='MyAccount'
          {...props}
        >
          <View
            style={{
              padding: 10,
              paddingTop: 20,
              paddingLeft: 15
            }}
          >
            <Text
              style={{
                fontWeight: 'bold'
              }}
            >
              Order Confirmation
            </Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.textStyle}>Thanks for your order.</Text>
            <Text style={styles.textStyle}>
              Your order has been placed successfully.
            </Text>
            <Text style={styles.textStyle}>
              Your Order id is{' '}
              <Text style={{ fontWeight: 'bold' }}>BMJ12365478-001</Text> . You
              can access My Account tab where
            </Text>
            <Text style={styles.textStyle}>
              you can access various sections related to your account and order.
              Your
            </Text>
            <Text style={styles.textStyle}>
              POP option for this order will get activated once the order is
            </Text>
            <Text style={styles.textStyle}>
              confirmed from our side. Please stay in touch with
            </Text>
            <Text style={styles.textStyle}>
              the POP button for submitting your proof
            </Text>
            <Text style={styles.textStyle}>
              of payment against this order id.
            </Text>
          </View>
        </CommonBottomLayout>
      </ScrollView>
    </TopBar>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    padding: 10,
    textAlign: 'center'
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP('50%'),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start'
    // width: 200
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 20
  },
  bullet: {
    width: 20
  },
  bulletText: {
    flex: 1,
    paddingTop: 2
  },
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    // marginTop: 10,
    // marginBottom:10,
    justifyContent: 'space-around'
  },

  buttonText: { textAlign: 'center', color: `#fff` },
  buttonTextOnPress: { textAlign: 'center', color: '#fff' },

  button: {
    backgroundColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    // borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('90%'),
    marginTop: 20
  },
  buttonPress: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP('6%'),
    width: widthPercentageToDP('90%'),
    marginTop: 10
  }
})
