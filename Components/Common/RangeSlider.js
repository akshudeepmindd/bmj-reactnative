import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  COLORS,
  heightPercentageToDP,
  widthPercentageToDP
} from "../../constants/styles";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default class RangeSlider extends Component {
  render() {
    const { ListVariables } = this.props;
    return ListVariables.map((vari, key) => (
      <View
        style={{
          flex: 0.19,
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            paddingLeft: 15,
            fontWeight: "bold",
            color: `${COLORS.MAINCOLOR.DARKBLUE}`
          }}
        >
          {vari.title}
        </Text>
        <View style={styles.rangeContainer}>
          <View style={styles.rangeValue}>
            <TouchableOpacity>
              <Text>{vari.staticStartValue}</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              padding: 20
            }}
          >
            To
          </Text>
          <View style={styles.rangeValue}>
            <TouchableOpacity>
              <Text>{vari.staticeEndValue}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 40
          }}
        >
          <MultiSlider
            values={[0, 40]}
            unselectedStyle={{
              backgroundColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
              padding: 2
              // height: heightPercentageToDP('1%')
            }}
            selectedStyle={{
              backgroundColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
              padding: 2
              // borderWidth: 2,
              // height: heightPercentageToDP('1%')
            }}
            markerStyle={{
              backgroundColor: "#fff",
              borderColor: `${COLORS.MAINCOLOR.BLUE}`,
              borderWidth: 1,
              borderRadius: 50,
              padding: 10
            }}
            // onValuesChange={nonCollidingMultiSliderValuesChange}
            min={0}
            max={100}
            step={1}
            allowOverlap={false}
            snapped
            minMarkerOverlapDistance={40}
          />
        </View>
      </View>
    ));
  }
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
    width: widthPercentageToDP("38%"),
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
  }
});
