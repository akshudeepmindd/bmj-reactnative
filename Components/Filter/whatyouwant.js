import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight
} from "react-native";
import TextField from "../Common/TextInput";
import { Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";

import { COLORS, SIZE } from "../../constants/styles";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import Topbar from "../Common/MenuBar";
import RangeSlider from "../Common/RangeSlider";
import CommonBottomLayout from "../Common/CommonBottomLayout";
import HorizontalGrid from "../Common/horigizontalGrid";
import { filterVariables2, RangeFilterVariable2 } from "../../constants";
export default class WhatDoYouWant extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

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
          path="WhatDoYouWant"
          {...this.props}
        >
          <HorizontalGrid ListVariables={filterVariables2} {...this.props} />
          <View style={{ paddingTop: 10 }}>
            <RangeSlider ListVariables={RangeFilterVariable2} />
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
    flexWrap: "wrap"
  },
  TouchableOpacity: {
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
    paddingLeft: 5,
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
    height: heightPercentageToDP("10%"),
    width: widthPercentageToDP("30%"),
    marginTop: 10
  },
  addtocart2: {
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    backgroundColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("10%"),
    width: widthPercentageToDP("30%"),
    marginTop: 10
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("6%"),
    width: widthPercentageToDP("90%"),
    marginTop: 10
  },
  buttonPress: {
    backgroundColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("6%"),
    width: widthPercentageToDP("90%"),
    marginTop: 10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    justifyContent: "space-around"
  },
  sortByText: {
    paddingLeft: 10,
    paddingTop: 10,
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
  buttonText: { textAlign: "center", color: `${COLORS.MAINCOLOR.DARKBLUE}` },
  buttonTextOnPress: { textAlign: "center", color: "#fff" }
});
