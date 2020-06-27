import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DataTable,
} from 'react-native-paper';
import {Ionicons, SimpleLineIcons, FontAwesome5} from '@expo/vector-icons';
import {CartProduct, removeToCart} from '../Redux/actions/categoryActions';
import Topbar from '../Common/MenuBar';
import TextField from '../Common/TextInput';
import {TableVariables, BottomTableContent} from '../../constants/index';

import {COLORS, SIZE, widthPercentageToDP} from '../../constants/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import GridView from '../Common/Grid';
import TopBar from '../Common/MenuBar';
import {ScrollView} from 'react-native-gesture-handler';
import TableLayout from '../Common/TableLayout';
import {connect} from 'react-redux';

class ShoppingCartView extends Component {
  state = {
    cartItems: '',
    tableData: [],
  };

  onHandleCartDelete = async (id, vid) => {
    let token = this.props.user.user.data.token;
    let res = await this.props.removeToCart (
      {productId: id, vendorId: vid},
      token
    );
    await this.props.CartProduct (token);
    this.setState ({
      cartItems: this.props.cart && this.props.cart.cartItems,
    });
    this.onTableDataSet (this.state.cartItems);
    this.props.navigation.navigate ('ProductView');
    console.log (res, 'deltete response');
  };

  async componentDidMount () {
    const {cart, user, CartProduct} = this.props;
    let token = user && user.user && user.user.data && user.user.data.token;
    await CartProduct (token);
    this.setState ({
      cartItems: cart && cart.cartItems,
    });
    this.onTableDataSet (this.state.cartItems);
  }

  onTableDataSet = cartItems => {
    let tableItems = new Array ();
    let newTableData = new Array ();
    cartItems &&
      cartItems.data.map ((item, key) => {
        tableItems[key] = [
          <Image
            source={require ('../../assets/images/product6.png')}
            style={{
              margin: 2,
              width: wp ('10%'),
              height: hp ('6.5%'),
            }}
          />,
          '10.2g',
          '10.2g',
          '10.2g',
          '75.5%',
          '75.5%',
          item.allCartData &&
            item.allCartData &&
            item.allCartData.productDetail &&
            item.allCartData.productDetail.basicPrice,
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              this.onHandleCartDelete (
                item.allCartData &&
                  item.allCartData &&
                  item.allCartData.productDetail &&
                  item.allCartData.productDetail.productId,
                item.allCartData &&
                  item.allCartData &&
                  item.allCartData.productDetail &&
                  item.allCartData.productDetail.user_id
              )}
          >
            <FontAwesome5
              name="trash-alt"
              color="red"
              size={20}
              iconStyle={{
                textAlign: 'center',
              }}
            />
          </TouchableOpacity>,
        ];

        newTableData.push (tableItems[key]);
        console.log (newTableData, 'new table datatata');
        this.setState ({
          tableData: newTableData,
        });
      });
  };

  render () {
    let TableVariables = [
      {
        tableTitle: 'Order Details',
        tableHead: [
          'Image',
          'Details',
          'Gross Wt',
          'Net Wt',
          'Fine Wt',
          'Waste',
          'Price',
          '',
        ],
        tableData: this.state.tableData,
        button: [
          {
            buttonTitle: 'Continue Shopping',
            align: 'flex-start',
            path: 'ProductView',
          },
          {
            buttonTitle: 'Checkout',
            align: 'flex-end',
            path: 'CheckoutView',
          },
        ],
      },
    ];
    return (
      <View style={styles.container}>
        <TopBar {...this.props}>
          <ScrollView>

            <TableLayout
              tableLayoutVariables={TableVariables}
              bottomVariable={BottomTableContent}
              shopping={true}
              headText="Shopping Cart"
              {...this.props}
            />
          </ScrollView>
        </TopBar>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.category,
});

const mapDispatchToProps = {
  CartProduct,
  removeToCart,
};

export default connect (mapStateToProps, mapDispatchToProps) (ShoppingCartView);

const styles = StyleSheet.create ({
  tablecontainer: {
    // flex: 1,
    // width: widthPercentageToDP('90%')
    // backgroundColor: '#fff',
  },
  head: {height: hp ('7%'), width: wp ('90%')},
  text: {margin: 6},
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // height: hp('100%'),
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 20,
  },
  container2: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkouttable: {
    flex: 1,
    // marginTop: 6,
    borderRadius: 5,
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    padding: 10,
  },
  rightstyle: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10,
    // marginTop: 6,
    // paddingRight: 18
    // marginTop: 10
  },
  rightstyle2: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 10,
    // paddingRight: 18
  },
  searchinput: {
    width: wp ('90%'),
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 7,
    padding: 4,
    marginLeft: 4,
  },
  buynow: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: widthPercentageToDP ('45%'),
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP ('45%'),
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },
  address: {
    backgroundColor: `${COLORS.MAINCOLOR.LIGHTGREY}`,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 4,
    paddingRight: 6,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
