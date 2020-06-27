import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import TopBar from "../Common/MenuBar";
import { ScrollView } from "react-native-gesture-handler";
import { NotificationsVariable } from "../../constants";
import { COLORS, widthPercentageToDP } from "../../constants/styles";

export default function Notification(props) {
  return (
    <TopBar {...props}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between"
        }}
      >
        <View style={{ flex: 1 }}>
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
              Notifications
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: `${COLORS.BLACK.LIGHTGREY}`,
              borderBottomWidth: 1,
              justifyContent: "center"
            }}
          >
            {NotificationsVariable.map((notify, key) => (
              <View
                style={{
                  padding: 10,
                  paddingLeft: 20,
                  borderTopColor: `${COLORS.BLACK.LIGHTGREY}`,
                  borderBottomColor: `${COLORS.BLACK.LIGHTGREY}`,
                  borderTopWidth: 1
                }}
              >
                <Text>{notify.text}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: `center`,
              padding: 10
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                alignContent: "flex-end"
              }}
            >
              <TouchableOpacity
                style={styles.shopping}
                onPress={() => props.navigation.navigate(`MyAccount`)}
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
        </View>
      </ScrollView>
    </TopBar>
  );
}

const styles = StyleSheet.create({
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
