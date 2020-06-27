import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
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
import {
  PendingOrdersTableVariables,
  BottomTableContent
} from '../../constants/index'

import { COLORS, SIZE, widthPercentageToDP } from '../../constants/styles'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP
} from 'react-native-responsive-screen'
import GridView from '../Common/Grid'
import TopBar from '../Common/MenuBar'
import { ScrollView } from 'react-native-gesture-handler'
import TableLayout from '../Common/TableLayout'

export default class ProccessedOrdersDetails extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TopBar {...this.props}>
          <ScrollView>
            <TableLayout
              tableLayoutVariables={PendingOrdersTableVariables}
              bottomVariable={BottomTableContent}
              shopping={false}
              orders={true}
              headText='My Orders (Status: Processed)'
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
    // width: widthPercentageToDP('90%')
    // backgroundColor: '#fff',
  },
  head: { height: hp('7%'), width: wp('90%') },
  text: { margin: 6 },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // height: hp('100%'),
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 20
  },
  container2: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkouttable: {
    flex: 1,
    // marginTop: 6,
    borderRadius: 5,
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    padding: 10
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
  buynow: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: widthPercentageToDP('45%'),
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP('45%'),
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30
  },
  address: {
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 4,
    paddingRight: 6,
    paddingTop: 10,
    paddingBottom: 10
  }
})
