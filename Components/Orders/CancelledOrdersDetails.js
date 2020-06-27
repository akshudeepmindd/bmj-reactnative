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

export default class CancelledOrdersDetails extends Component {
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
              headText='My Orders (Status: Cancelled)'
              {...this.props}
            />
          </ScrollView>
        </TopBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // height: hp('100%'),
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 20
  }
})
