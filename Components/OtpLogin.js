import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, SIZE, widthPercentageToDP } from "../constants/styles";
import CommonLayout from "./topLayout";
import TextField from "./Common/TextInput";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default class LoginWithOTP extends Component {
  render() {
    return (
      <CommonLayout>
        <View style={styles.container}>
          <Text style={styles.textColor}>
            LOG INTO <Text style={styles.innerText}>YOUR ACCOUNT</Text>
          </Text>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Text
              style={{
                borderBottomColor: "#000",
                borderBottomWidth: 2,
                width: widthPercentageToDP("28%")
              }}
            />
          </View>
          <View style={styles.formContainer}>
            <TextField
              style={styles.textInput}
              inlineImagePadding={2}
              placeholder="OTP Auto read"
            />
            <View style={styles.buttonContainer}>
              <Ionicons
                name="md-arrow-forward"
                size={40}
                iconStyle={styles.iconStyle}
                color="#fff"
              />
            </View>
            <Text style={styles.signUpText}>Or, Sign In Using Password</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View
              style={{
                paddingBottom: 40
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                <Text style={styles.signUpText2}>SignUp</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{ flex: 1, alignItems: "flex-end", paddingBottom: 10 }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ChangePassword")}
              >
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CommonLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textColor: {
    color: "#000",
    paddingTop: 25,
    textAlign: "center",
    marginTop: 10,
    fontSize: SIZE.MINLARGE
    // paddingBottom: 10
  },
  innerText: {
    fontWeight: "bold"
  },
  formContainer: {
    marginTop: 40,
    alignItems: "center"
  },
  textInput: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRadius: 50,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 30,
    borderWidth: 1,
    width: 300,
    color: "#000",
    textAlign: "left"
  },
  iconStyle: {
    borderColor: "#000",
    borderWidth: 30
  },
  buttonContainer: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: 50,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100 / 2
  },
  signUpText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 20,
    fontSize: SIZE.MEDIUM
  },
  signUpText2: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 20,
    fontSize: SIZE.MEDIUM,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  forgotText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    marginTop: 20,
    fontSize: SIZE.MEDIUM,
    position: "absolute",
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`
  }
});
