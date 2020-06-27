import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TextField from "../Common/TextInput";
import { Ionicons, SimpleLineIcons, FontAwesome } from "@expo/vector-icons";
import { listVariable } from "../../constants/index";

import { COLORS, SIZE } from "../../constants/styles";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function FilterBar(props) {
  return (
    <View
      style={{
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
      }}
    >
      <View style={styles.barContainer}>
        <View style={styles.searchinput}>
          <View>
            <TextField
              color={COLORS.BLACK.LIGHTGREY}
              placeholder="Search Products..."
            />
          </View>
          <View
            style={{
              flex: 1,
              alignContent: "flex-end",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingRight: 10,
              paddingBottom: 3
            }}
          >
            <FontAwesome
              name="search"
              size={18}
              color={COLORS.BLACK.LIGHTGREY}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={{
              backgroundColor: `${COLORS.BLACK.LIGHTBLACK}`,
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 2,
              paddingBottom: 2,
              borderRadius: 4
            }}
            onPress={() => props.navigation.navigate("Sort")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row-reverse",
                flexWrap: "wrap"
              }}
            >
              <FontAwesome name="filter" size={20} color="#fff" />
              <Text
                style={{
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontSize: 15,
                  color: "#fff"
                }}
              >
                Sort
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: `${COLORS.BLACK.LIGHTBLACK}`,
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
              <FontAwesome name="filter" size={20} color="#fff" />
              <Text
                style={{
                  paddingLeft: 5,
                  paddingRight: 5,
                  fontSize: 15,
                  color: "#fff"
                }}
              >
                Filter
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  searchinput: {
    borderWidth: 1,
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    width: widthPercentageToDP("40%"),
    borderRadius: 2,
    height: 25,
    paddingLeft: 5,
    margin: 2,
    flex: 1,
    flexDirection: "row"
  },
  barContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    marginLeft: 2
  }
});
