import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TopBar from "../Common/MenuBar";
import { COLORS } from "../../constants/styles";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function BhaavView(props) {
  return (
    <TopBar {...props}>
      <View style={styles.container}>
        <View style={styles.textStyleView}>
          <Text style={styles.textStyle}>Bhaav Today</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View>
            <TouchableOpacity style={styles.touchableContainer}>
              <Text style={styles.touchbaletext}>
                Gold Bhaav (Without GST): Rs.40,000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableContainer}>
              <Text style={styles.touchbaletext}>
                Paltinum Bhaav (Without GST): Rs.35,000
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.ButtonContainer}
              onPress={() => props.navigation.navigate("ProductView")}
            >
              <Text style={styles.Buttontext}>Continue Shopping</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TopBar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15
  },
  textStyleView: {
    flex: 0.2,
    paddingLeft: 20,
    paddingTop: 10
  },
  textStyle: {
    fontSize: 18
  },
  touchableContainer: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    width: widthPercentageToDP("90%"),
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  ButtonContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  touchbaletext: {
    color: `${COLORS.BLACK.LIGHTBLACK}`
  },
  Buttontext: {
    color: `${COLORS.MAINCOLOR.BLUE}`
  }
});
