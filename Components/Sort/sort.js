import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextField from "../Common/TextInput";
import { Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";

import { COLORS, SIZE } from "../../constants/styles";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import Topbar from "../Common/MenuBar";
import CommonBottomLayout from "../Common/CommonBottomLayout";

export default class Sort extends Component {
  render() {
    return (
      <Topbar {...this.props}>
        <CommonBottomLayout
          mainContainerStyle={styles.buttonContainer}
          buttonText={styles.buttonText}
          buttonOnPress={styles.buttonPress}
          buttonTextOnPress={styles.buttonTextOnPress}
          buttonStyle={styles.button}
          buttonTextValue="Apply"
          path="ProductView"
          {...this.props}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.barContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  style={styles.TouchableOpacity}
                  onPress={() => this.props.navigation.navigate("ProductView")}
                >
                  <View style={styles.icontextcontainer}>
                    <FontAwesome name="sort" size={20} color="#000" />
                    <Text style={styles.textstyle}>Sort</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View>
                <Text style={styles.sortByText}>Sort By</Text>
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.addtocart}
                    onPress={() =>
                      this.props.navigation.navigate("ShoppingView")
                    }
                  >
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      New Arrivals
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.addtocart}
                    onPress={() =>
                      this.props.navigation.navigate("ShoppingView")
                    }
                  >
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Weight High to Low
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addtocart}
                    onPress={() =>
                      this.props.navigation.navigate("CheckoutView")
                    }
                  >
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Weight Low to High
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addtocart}
                    onPress={() =>
                      this.props.navigation.navigate("CheckoutView")
                    }
                  >
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Prices Low to High
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.addtocart}
                    onPress={() =>
                      this.props.navigation.navigate("CheckoutView")
                    }
                  >
                    <Text style={{ textAlign: "center", padding: 5 }}>
                      Prices Low to High
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </CommonBottomLayout>
      </Topbar>
    );
  }
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 0.08,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  TouchableOpacity: {
    // backgroundColor: `${COLORS.BLACK.LIGHTBLACK}`,
    borderWidth: 1,
    borderColor: `${COLORS.BLACK.LIGHTBLACK}`,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 4
  },
  textstyle: {
    // backgroundColor: `${COLORS.BLACK.LIGHTBLACK}`,
    paddingLeft: 8,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 4
  },
  icontextcontainer: {
    flex: 1,
    flexDirection: "row-reverse",
    flexWrap: "wrap"
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    marginLeft: 2,
    height: 26
  },
  addtocart: {
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("8%"),
    width: widthPercentageToDP("30%"),
    marginTop: 10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // marginTop: 10,
    // marginBottom:10,
    justifyContent: "space-around"
  },
  sortByText: {
    paddingLeft: 10,
    color: `${COLORS.MAINCOLOR.DARKBLUE}`,
    fontWeight: "bold"
  },
  ApplyStyle: {
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("8%"),
    width: widthPercentageToDP("97%")
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    // marginTop: 10,
    // marginBottom:10,
    justifyContent: "space-around"
  },
  buttonText: { textAlign: "center", color: `#fff` },
  buttonTextOnPress: { textAlign: "center", color: "#fff" },

  button: {
    backgroundColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    // borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("6%"),
    width: widthPercentageToDP("90%"),
    marginTop: 20
  },
  buttonPress: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("6%"),
    width: widthPercentageToDP("90%"),
    marginTop: 10
  }
});
