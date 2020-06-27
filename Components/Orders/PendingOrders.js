import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Topbar from '../Common/MenuBar'
import { COLORS, widthPercentageToDP } from '../../constants/styles'

export default class PendingOrders extends Component {
  render () {
    return (
      <Topbar {...this.props}>
        <ScrollView style={styles.container}>
          <View
            style={{
              padding: 10
            }}
          >
            <Text
              style={{
                fontWeight: 'bold'
              }}
            >
              My Orders (Status: Pending)
            </Text>
          </View>
          <View
            style={{
              paddingTop: 10,
              alignItems: 'center'
            }}
          >
            <View style={styles.statusContainer}>
              <View style={styles.topHead}>
                <View>
                  <Text>BMJ-1111111</Text>
                  <Text>Order Date: Feb 03,2020</Text>
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
                        this.props.navigation.navigate('PendingOrdersDetails')
                      }
                    >
                      <Text style={styles.Buttontext}>View Order Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Gross Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 50
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>4gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Net Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 65
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>3.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Fine Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 62
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>1.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Price</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 82
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>

                    <Text>32078 INR</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              paddingTop: 10,
              alignItems: 'center'
            }}
          >
            <View style={styles.statusContainer}>
              <View style={styles.topHead}>
                <View>
                  <Text>BMJ-1111111</Text>
                  <Text>Order Date: Feb 03,2020</Text>
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
                        this.props.navigation.navigate('PendingOrdersDetails')
                      }
                    >
                      <Text style={styles.Buttontext}>View Order Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Gross Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 50
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>4gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Net Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 65
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>3.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Fine Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 62
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>1.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Price</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 82
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>

                    <Text>32078 INR</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              alignItems: 'center'
            }}
          >
            <View style={styles.statusContainer}>
              <View style={styles.topHead}>
                <View>
                  <Text>BMJ-1111111</Text>
                  <Text>Order Date: Feb 03,2020</Text>
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
                        this.props.navigation.navigate('PendingOrdersDetails')
                      }
                    >
                      <Text style={styles.Buttontext}>View Order Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Gross Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 50
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>4gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Net Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 65
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>3.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Fine Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 62
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>1.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Price</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 82
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>

                    <Text>32078 INR</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              alignItems: 'center'
            }}
          >
            <View style={styles.statusContainer}>
              <View style={styles.topHead}>
                <View>
                  <Text>BMJ-1111111</Text>
                  <Text>Order Date: Feb 03,2020</Text>
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
                        this.props.navigation.navigate('PendingOrdersDetails')
                      }
                    >
                      <Text style={styles.Buttontext}>View Order Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Gross Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 50
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>4gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Net Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 65
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>3.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Fine Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 62
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>1.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Price</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 82
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>

                    <Text>32078 INR</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 10,
              alignItems: 'center'
            }}
          >
            <View style={styles.statusContainer}>
              <View style={styles.topHead}>
                <View>
                  <Text>BMJ-1111111</Text>
                  <Text>Order Date: Feb 03,2020</Text>
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
                        this.props.navigation.navigate('PendingOrdersDetails')
                      }
                    >
                      <Text style={styles.Buttontext}>View Order Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Gross Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 50
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>4gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Net Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 65
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>3.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Fine Wt.</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 62
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>
                    <Text>1.2gm</Text>
                  </View>
                </View>
                <View style={styles.topHead2}>
                  <View style={styles.grossText}>
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <View>
                        <Text>Price</Text>
                      </View>
                      <View
                        style={{
                          paddingLeft: 82
                        }}
                      >
                        <Text>:</Text>
                      </View>
                    </View>

                    <Text>32078 INR</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.MyAccount2}>
            <View style={styles.MyAccountItems}>
              <View
                style={{
                  flexDirection: 'column',
                  flexWrap: 'wrap'
                  // justifyContent: 'flex-start',
                  // alignItems: 'flex-start'
                }}
              >
                <TouchableOpacity
                  style={styles.ButtonContainer}
                  onPress={() => this.props.navigation.navigate('MyAccount')}
                >
                  <Text style={styles.Buttontext}>Back To MyAccount</Text>
                </TouchableOpacity>
              </View>
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
  statusContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: `${COLORS.BLACK.LIGHTISGREY}`,
    width: widthPercentageToDP('95%')
  },
  topHead: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  topHead2: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  ButtonContainer: {
    // flex: .8,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP('33%')
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
  }
})
