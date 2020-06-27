import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
  Linking,
  Platform,
  ScrollView
} from "react-native";
import { COLORS, SIZE } from "../../constants/styles";
import TextField from "../Common/TextInput";
import TopBar from "../Common/MenuBar";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "react-native-responsive-screen";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign
} from "@expo/vector-icons";

export default class MyAccount extends Component {
  dialCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = "tel:${1234567890}";
    } else {
      phoneNumber = "telprompt:${1234567890}";
    }

    Linking.openURL(phoneNumber);
  };
  Email = () => {
    Linking.openURL("mailto:support@example.com");
  };
  render() {
    return (
      <TopBar {...this.props}>
        <ScrollView style={styles.container}>
          <View style={styles.MyAccount}>
            <View>
              <Text
                style={{ paddingLeft: 15, fontWeight: "bold", paddingTop: 20 }}
              >
                My Account
              </Text>
            </View>

            <View style={styles.MyAccountItems}>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("EditAccountsDetails")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <FontAwesome
                      name="user-circle"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Edit Details</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("ChangePassword")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <FontAwesome
                      name="unlock-alt"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Change Password</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("EditAddressBook")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <SimpleLineIcons
                      name="location-pin"
                      size={48.5}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Address Book</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MyAccount}>
            <View>
              <Text
                style={{ paddingLeft: 15, fontWeight: "bold", paddingTop: 20 }}
              >
                My Orders
              </Text>
            </View>

            <View style={styles.MyAccountItems}>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("PendingOrders")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <MaterialCommunityIcons
                      name="timer-sand"
                      size={48}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Pending</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("ProcessedOrders")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <FontAwesome
                      name="gift"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Processed</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("ShippedOrders")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <FontAwesome5
                      name="shipping-fast"
                      size={48}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Shipped</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() =>
                    this.props.navigation.navigate("CancelledOrders")
                  }
                >
                  <View style={styles.IoniconsStyle}>
                    <FontAwesome
                      name="shopping-cart"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Cancelled</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MyAccount}>
            <View>
              <Text
                style={{ paddingLeft: 15, fontWeight: "bold", paddingTop: 20 }}
              >
                Accounting
              </Text>
            </View>

            <View style={styles.MyAccountItems2}>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                  // justifyContent: 'flex-start',
                  // alignItems: 'flex-start'
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() => this.props.navigation.navigate("AttactPOP")}
                >
                  <View style={styles.IoniconsStyle2}>
                    <FontAwesome5
                      name="clipboard-list"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                      style={{ paddingLeft: 20 }}
                    />
                    <Text style={styles.EditDetailsText2}>
                      Attach POP{"\n"}(Order Id Wise)
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MyAccount2}>
            <View>
              <Text
                style={{ paddingLeft: 15, fontWeight: "bold", paddingTop: 20 }}
              >
                Get In Touch With Us
              </Text>
            </View>

            <View style={styles.MyAccountItems}>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={this.dialCall}
                >
                  <View style={styles.IoniconsStyle}>
                    <Ionicons
                      name="ios-call"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Call Now</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={this.Email}
                >
                  <View style={styles.IoniconsStyle}>
                    <MaterialCommunityIcons
                      name="email"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>Email Us</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                }}
              >
                <TouchableOpacity
                  style={styles.EditDetailsTO}
                  onPress={() => this.props.navigation.navigate("Notification")}
                >
                  <View style={styles.IoniconsStyle}>
                    <AntDesign
                      name="notification"
                      size={50}
                      backgroundColor={COLORS.BLACK.LIGHTBLACK}
                    />
                    <Text style={styles.EditDetailsText}>NotifiCations</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MyAccount2}>
            <View style={styles.MyAccountItems}>
              <View
                style={{
                  flexDirection: "column",
                  flexWrap: "wrap"
                  // justifyContent: 'flex-start',
                  // alignItems: 'flex-start'
                }}
              >
                <TouchableOpacity
                  style={styles.ButtonContainer}
                  onPress={() => this.props.navigation.navigate("ProductView")}
                >
                  <Text style={styles.Buttontext}>Continue Shopping</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </TopBar>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column" },
  MyAccount: {
    flex: 1,
    flexDirection: "column",
    borderBottomColor: `${COLORS.BLACK.LIGHTGREY}`,
    borderBottomWidth: 4,
    paddingBottom: 20
  },
  MyAccount2: {
    flex: 1,
    flexDirection: "column"
  },
  MyAccountItems: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-around",
    paddingLeft: 15,
    paddingTop: 10
  },
  MyAccountItems2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    // justifyContent: 'space-around',
    paddingLeft: 15,
    paddingTop: 10
  },
  EditDetailsTO: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 4
  },
  EditDetailsText: {
    textAlign: "center",
    fontSize: 15,
    color: `${COLORS.BLACK.LIGHTBLACK}`,
    paddingTop: 5,
    justifyContent: "center"
  },
  EditDetailsText2: {
    textAlign: "center",
    fontSize: 15,
    color: `${COLORS.BLACK.LIGHTBLACK}`,
    paddingTop: 5,
    paddingLeft: 0
  },
  IoniconsStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  IoniconsStyle2: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingLeft: 6
  },
  addtocart: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 30,
    // paddingBottom: 30,
    // paddingRight: 20,
    // paddingLeft: 20,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2
    // width: widthPercentageToDP('36%'),
  },
  cartText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    fontSize: 10
  },
  ButtonContainer: {
    // flex: .8,
    borderWidth: 1,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  Buttontext: {
    color: `${COLORS.MAINCOLOR.BLUE}`
  }
});
