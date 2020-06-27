import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, widthPercentageToDP } from "../../constants/styles";
import { AttachPOPContent } from "../../constants";
import Topbar from "../Common/MenuBar";
import { ScrollView } from "react-native-gesture-handler";
import * as DocumentPicker from "expo-document-picker";

export default class AttactPOP extends Component {
  getDocumentPicker = async () => {
    let result = await DocumentPicker.getDocumentAsync();
    console.log(result);
  };

  render() {
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
                fontWeight: "bold"
              }}
            >
              Attach POP
            </Text>
          </View>
          {AttachPOPContent.map((item, key) => (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center"
              }}
            >
              <View style={styles.statusContainer}>
                <View style={styles.topHead}>
                  <View
                    style={{
                      paddingTop: 10,
                      alignItems: "center"
                    }}
                  >
                    <View style={styles.statusContainer}>
                      <View
                        style={{
                          padding: 5,
                          flexDirection: "row"
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
                              justifyContent: "flex-end",
                              alignItems: "flex-end"
                            }}
                          >
                            <TouchableOpacity
                              style={styles.ButtonContainer}
                              onPress={this.getDocumentPicker}
                            >
                              <Text style={styles.Buttontext}>
                                Upload POP {"\n"}
                                <Text style={{ fontSize: 8 }}>
                                  (JPG / JPEG / PNG / PDF)
                                </Text>
                              </Text>
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
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
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
                onPress={() => this.props.navigation.navigate(`MyAccount`)}
              >
                <Text
                  style={{
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                    textAlign: `center`
                  }}
                >
                  Back To MyAccount
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Topbar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  statusContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: `${COLORS.BLACK.LIGHTISGREY}`,
    width: widthPercentageToDP("95%")
  },
  topHead: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between"
    // padding: 10
  },
  topHead2: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    // justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5
  },
  ButtonContainer: {
    // flex: .8,
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  Buttontext: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    textAlign: "center"
  },
  grossText: {
    flex: 1,
    flexDirection: "row"
    // justifyContent: 'space-between',
    // width: widthPercentageToDP('33%')
  },
  MyAccount2: {
    flex: 1,
    flexDirection: "column"
  },
  MyAccountItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingTop: 10
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP("50%"),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30
  }
});
