import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, SIZE } from "../../constants/styles";

export default class RadioButtons extends Component {
  state = {
    value: "first"
  };

  render() {
    const { options } = this.props;
    const { value } = this.state;

    return (
      <View>
        {options.map(item => {
          return (
            <View key={item.key} style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.circle}
                checked={item.key}
                onPress={() => {
                  this.setState({
                    value: item.key
                  });
                }}
              >
                {value === item.key && <View style={styles.checkedCircle} />}
              </TouchableOpacity>
              <Text style={styles.radiotext}>&nbsp;&nbsp;{item.text}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 30
  },
  // radiotext: {
  //   marginLeft: 50
  // },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    alignItems: "center",
    justifyContent: "center"
    // marginRight: 15
  },

  checkedCircle: {
    width: 10,
    height: 10,
    borderRadius: 7,
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`
  }
});
