import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Slider } from "react-native";
import TopBar from "../Common/MenuBar";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS, heightPercentageToDP } from "../../constants/styles";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import CommonBottomLayout from "../Common/CommonBottomLayout";
import { filterVariables, RangeFilterVariable } from "../../constants";
import HorizontalGrid from "../Common/horigizontalGrid";
import RangeSlider from "../Common/RangeSlider";
export default function FilterView(props) {
  return (
    <TopBar {...props}>
      <CommonBottomLayout
        mainContainerStyle={styles.buttonContainer}
        buttonText={styles.buttonText}
        buttonOnPress={styles.buttonPress}
        buttonTextOnPress={styles.buttonTextOnPress}
        buttonStyle={styles.button}
        buttonTextValue="Apply"
        path="WhatDoYouWant"
        {...props}
      >
        <View
          style={{
            flex: 0.04,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "column-reverse",
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: `${COLORS.BLACK.DARKBLACK}`,
              marginRight: 10,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 2,
              paddingBottom: 2,
              borderRadius: 4
            }}
            onPress={() => props.navigation.navigate("Filter")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                flexWrap: "wrap"
              }}
            >
              <FontAwesome name="filter" size={20} color="#000" />
              <Text
                style={{
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontSize: 16,
                  color: "#000"
                }}
              >
                Filter
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <RangeSlider ListVariables={RangeFilterVariable} {...props} />
        <HorizontalGrid ListVariables={filterVariables} {...props} />
      </CommonBottomLayout>
    </TopBar>
  );
}

const styles = StyleSheet.create({
  rangeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  rangeValue: {
    width: widthPercentageToDP("40%"),
    height: heightPercentageToDP("5%"),
    borderWidth: 1,
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    justifyContent: "space-around",
    alignItems: "center"
  },
  touchableCOntainer: {
    width: widthPercentageToDP("50%"),
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundSlider: {
    width: "100%"
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
  addtocart: {
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("10%"),
    width: widthPercentageToDP("30%"),
    marginTop: 10
  },
  sortByText: {
    paddingLeft: 20,
    paddingTop: 10,
    color: `${COLORS.MAINCOLOR.DARKBLUE}`,
    fontWeight: "bold"
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
