import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  COLORS,
  heightPercentageToDP,
  widthPercentageToDP
} from "../../constants/styles";

export default class HorizontalGrid extends Component {
  render() {
    const { ListVariables } = this.props;
    return ListVariables.map((filter, key) => (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View>
          <Text style={styles.sortByText}>{filter.title}</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.buttonContainer}>
            {filter.valueArray.map(item => (
              <View style={{ paddingRight: 10, paddingLeft: 10 }}>
                <TouchableOpacity
                  style={styles.addtocart}
                  onPress={() => this.props.navigation.navigate(`${item.path}`)}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: `${COLORS.MAINCOLOR.DARKBLUE}`
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    ));
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 5,
    // marginTop: 10,
    // marginBottom:10,
    justifyContent: "space-around"
  },
  addtocart: {
    borderColor: `${COLORS.MAINCOLOR.DARKBLUE}`,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    height: heightPercentageToDP("7%"),
    width: widthPercentageToDP("28%"),
    marginTop: 10
  },
  sortByText: {
    paddingLeft: 20,
    paddingTop: 10,
    color: `${COLORS.MAINCOLOR.DARKBLUE}`,
    fontWeight: "bold"
  }
});
