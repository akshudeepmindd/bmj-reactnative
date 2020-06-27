import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native'
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DataTable
} from 'react-native-paper'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'

import Topbar from '../Common/MenuBar'
import TextField from '../Common/TextInput'
import { CheckoutTableVariables } from '../../constants/index'

import { COLORS, SIZE, widthPercentageToDP } from '../../constants/styles'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP
} from 'react-native-responsive-screen'
import GridView from '../Common/Grid'
import TopBar from '../Common/MenuBar'
import { Table, Row, Rows } from 'react-native-table-component'
import { ScrollView } from 'react-native-gesture-handler'
import TableLayout from '../Common/TableLayout'

export default class CheckoutView extends Component {
  state = {
    tableHead: [
      'Image',
      'Product Details',
      'Gross Wt',
      'Net Wt',
      'Fine Wt',
      'Wastage',
      'Price'
    ],
    tableData: [
      [
        <Image
          source={require('../../assets/images/product6.png')}
          style={{
            margin: 2,
            width: wp('11.5%'),
            height: hp('6.5%')
          }}
        />,
        '10.2g',
        '10.2g',
        '10.2g',
        '75.5%',
        '75.5%',
        'Rs. 59,564'
      ],
      [
        <Image
          source={require('../../assets/images/product6.png')}
          style={{
            margin: 2,
            width: wp('11.5%'),
            height: hp('6.5%')
          }}
        />,
        ,
        '10.2g',
        '10.2g',
        '10.2g',
        '75.5%',
        '75.5%',
        'Rs. 59,564'
      ],
      ['Total wt', '', '5gm', '4.5gm', '', '0.1ct', 'Rs. 59,564', '']
    ]
  }
  render () {
    const state = this.state
    return (
      <View style={styles.container}>
        <TopBar {...this.props}>
          <ScrollView>
            <TableLayout
              tableLayoutVariables={CheckoutTableVariables}
              shopping={false}
              headText='Checkout'
              {...this.props}
            />
          </ScrollView>
        </TopBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tablecontainer: {
    // flex: 1,
    width: widthPercentageToDP('90%')
    // backgroundColor: '#fff',
  },
  head: { height: hp('7%'), width: wp('90%') },
  text: { margin: 6 },
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // height: hp('100%'),
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 20
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkouttable: {
    flex: 50,
    // marginTop: 6,
    borderRadius: 5,
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    padding: 10,
    paddingBottom: 5
  },
  rightstyle: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10
    // marginTop: 6,
    // paddingRight: 18
    // marginTop: 10
  },
  rightstyle2: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10
    // paddingRight: 18
  },
  searchinput: {
    width: wp('90%'),
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 7,
    padding: 4,
    marginLeft: 4
  },
  address: {
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    borderRadius: 5,
    // marginTop: 5,
    paddingLeft: 4,
    paddingRight: 6,
    paddingTop: 15,
    paddingBottom: 10
  }
})
