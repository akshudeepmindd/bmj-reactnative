import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import {useDispatch} from 'react-redux';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import LoginWithEmail from './EmailLogin';
import LoginWithOTP from './OtpLogin';
import Signup from './signup/basicDetail';
import ChangePassword from './ChangePassword';
import Professional from './signup/proffessionalDetail';
import Category from './Category/category';
import SubCategories from './Subcategory/subcategory';
import SubCategories2 from './Subcategory2/subcategory2';
import ProductView from './product';
import CheckoutView from './Checkout/checkout';
import ShoppingCartView from './shopping';
import {COLORS} from '../constants/styles';
import Sort from './Sort/sort';
import EditAccountsDetails from './Accounts/EditAccountsDetails';
import EditAddressBook from './Accounts/EditAddressBook';
import MyAccount from './Accounts/MyAccount';
import PendingOrders from './Orders/PendingOrders';
import ProcessedOrders from './Orders/ProcessedOrder';
import ShippedOrders from './Orders/ShippedOrders';
import CancelledOrders from './Orders/CancelledOrders';
import PendingOrdersDetails from './Orders/PendingOrdersDetails';
import ProccessedOrdersDetails from './Orders/ProccessedOrderDetails';
import ShippedOrdersDetails from './Orders/ShippedOrdersDetails';
import CancelledOrdersDetails from './Orders/CancelledOrdersDetails';
import AttactPOP from './Accounts/AttachPOP';
import Dashboard from './Dashboard';
import BhaavView from './Bhaav';
import FilterView from './Filter';
import Notification from './Accounts/Notifications';
import PoliciesAndInformation from './Policies/PoliciesAndInformation';
import PrivacyPolicy from './Policies/PrivacyPolicy';
import OrderConfirmation from './Orders/OrderConfirmation';
import WhatDoYouWant from './Filter/whatyouwant';
import TrackOrder from './Accounts/TrackYourOrder';
import StartupScreen from './startScreen';
import * as authActions from './Redux/actions/usersActions';
import {Ionicons, SimpleLineIcons, FontAwesome} from '@expo/vector-icons';

const CategoryNavigator = createStackNavigator (
  {
    Category: {screen: Category},
    SubCategories: {screen: SubCategories},
    ProductView: {screen: ProductView},
    Sort: {screen: Sort},
    Filter: {screen: FilterView},
    WhatDoYouWant: {screen: WhatDoYouWant},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const AccountNavigator = createStackNavigator (
  {
    MyAccount: {screen: MyAccount},
    EditAccountsDetails: {screen: EditAccountsDetails},
    EditAddressBook: {screen: EditAddressBook},
    PendingOrders: {screen: PendingOrders},
    ProcessedOrders: {screen: ProcessedOrders},
    ShippedOrders: {screen: ShippedOrders},
    CancelledOrders: {screen: CancelledOrders},
    PendingOrdersDetails: {screen: PendingOrdersDetails},
    ProccessedOrdersDetails: {screen: ProccessedOrdersDetails},
    ShippedOrdersDetails: {screen: ShippedOrdersDetails},
    CancelledOrdersDetails: {screen: CancelledOrdersDetails},
    AttactPOP: {screen: AttactPOP},
    TrackOrder: {screen: TrackOrder},
    Notification: {screen: Notification},
    PoliciesAndInformation: {screen: PoliciesAndInformation},
    PrivacyPolicy: {screen: PrivacyPolicy},
    OrderConfirmation: {screen: OrderConfirmation},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const DashboardNavigator = createStackNavigator (
  {
    Dashboard: {screen: Dashboard},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const ScreensNavigation = createStackNavigator (
  {
    Login: {screen: LoginWithEmail},
    OTPLogin: {screen: LoginWithOTP},
    Signup: {screen: Signup},
    ChangePassword: {screen: ChangePassword},
    companyDetail: {screen: Professional},

    CheckoutView: {screen: CheckoutView},
    ShoppingView: {screen: ShoppingCartView},
    Sort: {screen: Sort},
    Bhaav: {screen: BhaavView},
    Filter: {screen: FilterView},
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  }
);
const InnerNavigator = createDrawerNavigator (
  {
    Dashboard: {
      screen: DashboardNavigator,
      navigationOptions: {
        drawerLabel: 'Dashboard',
      },
    },
    AccountNavigator: {
      screen: AccountNavigator,
      navigationOptions: {
        drawerLabel: 'My Account',
        // drawerIcon: ({ tintColor }) => <FontAwesome name="user" size={15} />
      },
    },
    CategoryNavigator: {
      screen: CategoryNavigator,
      navigationOptions: {
        drawerLabel: 'Collectoin',
        // drawerIcon: ({ tintColor }) => <FontAwesome name="user" size={15} />
      },
    },
  },
  {
    drawerBackgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    style: {
      borderWidth: 1,
      borderColor: '#000',
      // borderBottomWidth: 10,
      // borderBottomColor: "red"
    },
    // itemStyle: { color: "red", borderWidth: 10, borderColor: "#000" },
    contentComponent: props => {
      const dispatch = useDispatch ();
      return (
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
          <ScrollView style={styles.menuContainer}>
            <View
              style={{
                height: heightPercentageToDP ('20%'),
                // backgroundColor: "#fff",
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity style={styles.circle}>
                <Text>Profile Pic</Text>
              </TouchableOpacity>
            </View>

            <DrawerItems
              inactiveTintColor="#fff"
              inactiveBackgroundColor={COLORS.MAINCOLOR.BLUE}
              activeBackgroundColor={COLORS.BLACK.LIGHTISGREY}
              borderColor={COLORS.BLACK.GREY}
              borderWidth={2}
              itemStyle={{
                borderTopWidth: 1,
                borderTopColor: '#000',
                // borderBottomColor: "#000",
                // borderBottomWidth: 1
              }}
              activeTintColor="#000"
              {...props}
            />
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderTopColor: '#000',
                padding: 20,
              }}
              onPress={() => {
                dispatch (authActions.logout ());
                props.navigation.navigate ('Login');
              }}
            >
              <Text style={{color: '#fff'}}>Logout</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      );
    },
  }
);

const MainNavigator = createSwitchNavigator ({
  Startup: StartupScreen,
  Auth: ScreensNavigation,
  Drawer: InnerNavigator,
});
export default (Navigation = createAppContainer (MainNavigator));

const styles = StyleSheet.create ({
  circle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    backgroundColor: '#fff',
  },
  menuContainer: {
    marginTop: 30,
  },
  itemStyle: {
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
  },
});
