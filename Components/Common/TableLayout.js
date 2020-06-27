import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  COLORS,
  SIZE,
  widthPercentageToDP,
  heightPercentageToDP
} from "../../constants/styles";
import TextField from "./TextInput";
import { FontAwesome } from "@expo/vector-icons";

export default class TableView extends Component {
  render() {
    const {
      headText,
      tableLayoutVariables,
      bottomVariable,
      shopping,
      orders
    } = this.props;
    let aligment = shopping ? "space-between" : "center";
    return (
      <ScrollView>
        <Text
          h1
          style={{
            paddingLeft: 20,
            fontWeight: "bold",
            paddingBottom: 10,
            paddingTop: 10
          }}
        >
          {headText}
        </Text>
        {tableLayoutVariables.map((tableVar, key) => (
          <View>
            <ScrollView style={styles.checkouttable}>
              <Text
                h1
                style={{
                  paddingTop: 2,
                  paddingLeft: 2,
                  paddingBottom: 4,
                  fontWeight: "bold"
                }}
              >
                {tableVar.tableTitle}
              </Text>

              <View style={styles.tablecontainer}>
                <Table
                  borderStyle={{
                    borderWidth: 1,
                    borderColor: `${COLORS.BLACK.LIGHTBLACK}`
                  }}
                  style={{
                    flex: 1,
                    flexDirection: "column"
                  }}
                >
                  <Row
                    data={tableVar.tableHead}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                  {tableVar.tableData.length ? <Rows data={tableVar.tableData} textStyle={styles.text} />:<Text>No Data</Text>}
                </Table>
              </View>
              {shopping || orders ? (
                <Text></Text>
              ) : (
                <>
                  <View style={styles.rightstyle}>
                    <Text>Sub Total: 33914INR</Text>
                    <Text>GST(35): 339INR</Text>
                    <Text>Total: 33,914</Text>
                  </View>

                  <View style={styles.rightstyle2}>
                    <Text>Logistic Charges (Hub City): 500 INR</Text>
                    <Text>GST(18%): 90 INR</Text>
                  </View>
                  <View style={styles.rightstyle}>
                    <Text>Insurance Charges (0.1%): 34 INR</Text>
                    <Text>GST(18%): 6 INR</Text>
                  </View>
                  <View style={styles.rightstyle}>
                    <Text>Grand Total: 34,820 INR</Text>
                  </View>
                </>
              )}
            </ScrollView>
            {shopping ? (
              <>
                <View
                  style={{
                    paddingTop: 10,
                    alignItems: "center"
                  }}
                >
                  <View style={styles.statusContainerVoiceText}>
                    <TextField
                      placeholder="Add Comment (Using Voice or Text)"
                      style={{
                        padding: 10
                      }}
                    />
                    <View
                      style={{
                        flex: 1,
                        alignItems: "flex-end",
                        justifyContent: "center",
                        paddingRight: 15
                      }}
                    >
                      <FontAwesome name="microphone" size={20} color="#000" />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    paddingTop: 10,
                    alignItems: "center"
                  }}
                >
                  <View style={styles.statusContainer}>
                    <View
                      style={{
                        padding: 5
                      }}
                    >
                      {bottomVariable.map((item, key) => (
                        <View style={styles.topHead2}>
                          <View style={styles.grossText}>
                            <Text>
                              {item.label}
                              <Text
                                style={{
                                  lineHeight: 20,
                                  letterSpacing: 20
                                }}
                              >
                                :
                              </Text>
                            </Text>

                            <Text>{item.value}</Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </>
            ) : orders ? (
              <View
                style={{
                  paddingTop: 10,
                  alignItems: "center"
                }}
              >
                <View style={styles.statusContainer}>
                  <View
                    style={{
                      padding: 5
                    }}
                  >
                    {bottomVariable.map((item, key) => (
                      <View style={styles.topHead2}>
                        <View style={styles.grossText}>
                          <Text>
                            {item.label}
                            <Text
                              style={{
                                lineHeight: 20,
                                letterSpacing: 20
                              }}
                            >
                              :
                            </Text>
                          </Text>

                          <Text>{item.value}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ) : (
              <View style={styles.address}>
                <Text style={{ fontWeight: "bold" }}>Delivery Address</Text>
                <TextField
                  placeholder="Parshuram Ji Jewellers, Soron Gate, Kasganj, UP, IN "
                  style={styles.searchinput}
                />
                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "lightblue",
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 12,
                      paddingBottom: 12,
                      width: wp("50%"),
                      textAlign: "center",
                      borderWidth: 1,
                      borderColor: "lightblue",
                      marginTop: 10
                    }}
                  >
                    Add New
                  </Text>
                </View>
              </View>
            )}

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: `${aligment}`,
                padding: 10
              }}
            >
              {tableVar.button.map((btn, key) => (
                <View
                  style={{
                    alignItems: `${btn.align}`
                  }}
                >
                  <TouchableOpacity
                    style={styles.shopping}
                    onPress={() =>
                      this.props.navigation.navigate(`${btn.path}`)
                    }
                  >
                    <Text
                      style={{
                        color: `${COLORS.MAINCOLOR.BLUE}`,
                        textAlign: `center`
                      }}
                    >
                      {btn.buttonTitle}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  tablecontainer: {
    // flex: 1,
    // width: widthPercentageToDP('90%')
    // backgroundColor: '#fff',
  },
  text: { paddingLeft: 1, fontSize: 12 },
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    // height: hp("100%"),
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 20
  },
  container2: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  checkouttable: {
    flex: 1,
    // marginTop: 6,
    margin: 10,
    borderRadius: 5,
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    padding: 10
  },
  rightstyle: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 10
  },
  rightstyle2: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 10
  },
  searchinput: {
    width: wp("90%"),
    borderColor: "grey",
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
    width: widthPercentageToDP("45%"),
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP("40%"),
    height: heightPercentageToDP("6%"),
    paddingTop: 5,
    paddingBottom: 5
    // paddingRight: 30,
    // paddingLeft: 30
  },
  address: {
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 4,
    paddingRight: 6,
    paddingTop: 10,
    paddingBottom: 10
  },
  statusContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: `${COLORS.BLACK.LIGHTISGREY}`,
    width: widthPercentageToDP("95%"),
    borderRadius: 10
  },
  statusContainerVoiceText: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: `${COLORS.BLACK.LIGHTISGREY}`,
    width: widthPercentageToDP("95%"),
    borderRadius: 10
  },
  topHead2: {
    flex: 1.5,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  grossText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
    // width: widthPercentageToDP('33%')
  }
});
