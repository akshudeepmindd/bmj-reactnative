import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, widthPercentageToDP } from '../../constants/styles'
import { AttachPOPContent, TrackTableVariables } from '../../constants'
import Topbar from '../Common/MenuBar'
import { ScrollView } from 'react-native-gesture-handler'
import { Table, Row, Rows } from 'react-native-table-component'

export default class TrackOrder extends Component {
  render () {
    return (
      <Topbar {...this.props}>
        <ScrollView>
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
              Track Your Order
            </Text>
          </View>
          {AttachPOPContent.map((item, key) => (
            <View
              style={{
                paddingTop: 10,
                alignItems: 'center'
              }}
            >
              <View style={styles.statusContainer}>
                <View style={styles.topHead}>
                  <View
                    style={{
                      paddingTop: 10,
                      alignItems: 'center'
                    }}
                  >
                    <View style={styles.statusContainer}>
                      <View
                        style={{
                          padding: 5,
                          flexDirection: 'row'
                        }}
                      >
                        <View style={styles.topHead2}>
                          <View style={styles.grossText}>
                            <Text>
                              {item.orderId.label}
                              <Text
                                style={{
                                  lineHeight: 20,
                                  letterSpacing: 20
                                }}
                              >
                                :
                              </Text>
                            </Text>

                            <Text>{item.orderId.value}</Text>
                          </View>
                          <View style={styles.grossText}>
                            <Text>
                              {item.orderAmount.label}
                              <Text
                                style={{
                                  lineHeight: 20,
                                  letterSpacing: 20
                                }}
                              >
                                :
                              </Text>
                            </Text>

                            <Text>{item.orderAmount.value}</Text>
                          </View>

                          <View style={styles.grossText}>
                            <Text>
                              {item.orderStatus.label}
                              <Text
                                style={{
                                  lineHeight: 20,
                                  letterSpacing: 20
                                }}
                              >
                                :
                              </Text>
                            </Text>

                            <Text>{item.orderStatus.value}</Text>
                          </View>
                        </View>

                        <View>
                          <View
                            style={{
                              // flexDirection: 'column',
                              // flexWrap: 'wrap',
                              justifyContent: 'flex-end',
                              alignItems: 'flex-end'
                            }}
                          >
                            <TouchableOpacity
                              style={styles.ButtonContainer}
                              onPress={() =>
                                this.props.navigation.navigate(
                                  'CancelledOrdersDetails'
                                )
                              }
                            >
                              <Text style={styles.Buttontext}>Track Order</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
          <View
            style={{
              marginTop: 20
            }}
          >
            <View style={styles.tableHeading}>
              <Text>Sub Order Id: 112233-AJ-125 Tracking Details</Text>
            </View>

            {TrackTableVariables.map((tbVar, key) => (
              <Table
                style={{
                  marginLeft: 15,
                  marginRight: 15
                }}
                borderStyle={{
                  borderWidth: 1,
                  borderColor: `${COLORS.BLACK.LIGHTBLACK}`
                }}
              >
                <Row
                  data={tbVar.tableHead}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <Rows data={tbVar.tableData} textStyle={styles.text} />
              </Table>
            ))}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: `center`,
              padding: 10
            }}
          >
            <View
              style={{
                alignItems: `center`
              }}
            >
              <TouchableOpacity
                style={styles.shopping}
                onPress={() => this.props.navigation.navigate(`ProductView`)}
              >
                <Text
                  style={{
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                    textAlign: `center`
                  }}
                >
                  Continue Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Topbar>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    textAlign: 'center'
  },
  tableHeading: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  statusContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: `${COLORS.BLACK.LIGHTISGREY}`,
    width: widthPercentageToDP('95%')
  },
  topHead: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
    // padding: 10
  },
  topHead2: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  ButtonContainer: {
    // flex: .8,
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Buttontext: {
    color: `${COLORS.MAINCOLOR.BLUE}`
  },
  grossText: {
    flex: 1,
    flexDirection: 'row'
    // justifyContent: 'space-between',
    // width: widthPercentageToDP('33%')
  },
  MyAccount2: {
    flex: 1,
    flexDirection: 'column'
  },
  MyAccountItems: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-around',
    paddingLeft: 15,
    paddingTop: 10
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
  }
})
