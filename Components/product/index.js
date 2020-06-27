import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import {TouchableOpacity, TextInput} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DataTable,
} from 'react-native-paper';
import {connect} from 'react-redux';
import FilterBar from '../Common/filterBar';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';

import Topbar from '../Common/MenuBar';
import TextField from '../Common/TextInput';
import {
  productDetail,
  addToCart,
  CartProduct,
} from '../Redux/actions/categoryActions';
import {COLORS, SIZE, widthPercentageToDP} from '../../constants/styles';
import ProductSlider from './productside';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {FontAwesome} from '@expo/vector-icons';
import {ScrollView} from 'react-native-gesture-handler';
import category from '../Category/category';

class ProductView extends Component {
  async componentDidMount () {
    const {category, productDetail} = this.props;

    await productDetail (
      category && category.product && category.product.data[0]
    );
    // console.log (category.productDetail, 'products detail');
  }
  onHandleAddToCart = async (pId, vId, basicPrice) => {
    // console.log (pId, vId, basicPrice, 'product details');
    let params = {
      productId: pId,
      vendorId: vId,
      basicPrice,
      quantity: '1',
    };
    // console.log (this.props.user.user.data, 'userrrrr');
    let token =
      this.props.user &&
      this.props.user.user &&
      this.props.user.user.data.token;
    let res = await this.props.addToCart (params, token);
    // console.log (res, 'resposnsnsnssnofaddtocart');
    await this.props.CartProduct (token);
    ToastAndroid.showWithGravity (
      'Product is Added to Cart',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    this.props.navigation.navigate ('ShoppingView');
  };
  render () {
    const {category} = this.props;
    let productPrice =
      category && category.productDetail && category.productDetail.basicPrice;
    let vendorId =
      category && category.productDetail && category.productDetail.user_id;
    let productId =
      category && category.productDetail && category.productDetail.productId;
    return (
      <Topbar {...this.props}>
        <ScrollView style={{padding: 0}}>
          <FilterBar {...this.props} />
          <View style={styles.container}>
            <View style={styles.container1}>
              <View style={styles.productSider}>
                <ProductSlider
                  productList={
                    category && category.product && category.product.data
                  }
                />
              </View>
              <View style={styles.productDetail}>
                <View
                  style={{
                    flexGrow: 1,
                  }}
                >
                  <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={require ('../../assets/images/product3.png')}
                  />

                  <View
                    style={{
                      // flex: 1,
                      flexDirection: 'row',
                      // justifyContent: "space-around",
                      // alignItems: "center",
                      flexWrap: 'wrap',
                      marginTop: 10,
                    }}
                  >
                    <View>
                      <Text style={styles.text}>
                        {category &&
                          category.productDetail &&
                          category.productDetail.skuNumber}
                      </Text>
                      <Text style={styles.text}>
                        Stock:
                        {' '}
                        {category &&
                          category.productDetail &&
                          category.productDetail.quantity}
                        {' '}
                        Qty
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        paddingRight: 10,
                      }}
                    >
                      <Text style={styles.text}>Price</Text>
                      <Text style={styles.text}>
                        Rs.
                        {category &&
                          category.productDetail &&
                          category.productDetail.basicPrice}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 0.2}}>
                    <View>
                      <Text style={styles.priceBrackupText}>
                        Price Breakup -
                      </Text>
                    </View>
                    <ScrollView horizontal={true}>
                      <View>
                        <TouchableOpacity style={styles.iconContainer}>
                          <Text style={styles.priceText}>Gold Wt.</Text>
                          <Text style={styles.breakpriceText}>Rs</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.iconContainer}>
                          <Text style={styles.priceText}>Tunch</Text>
                          <Text style={styles.breakpriceText}>Rs</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.iconContainer}>
                          <Text style={styles.priceText}>Wastage</Text>
                          <Text style={styles.breakpriceText}>Rs</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.iconContainer}>
                          <Text style={styles.priceText}>Gold Rate</Text>
                          <Text style={styles.breakpriceText}>Rs</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.iconContainer}>
                          <Text style={styles.priceText}>Labour Chrgs.</Text>
                          <Text style={styles.breakpriceText}>Rs</Text>
                        </TouchableOpacity>
                      </View>
                      <View>
                        <TouchableOpacity style={styles.iconContainer}>
                          <Text style={styles.priceText}>Taxes</Text>
                          <Text style={styles.breakpriceText}>Rs</Text>
                        </TouchableOpacity>
                      </View>
                    </ScrollView>
                  </View>
                  <View style={styles.productDetailText}>
                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                      Product Details
                    </Text>
                    <View>
                      <View style={styles.productDetailText2}>
                        <View style={{alignItems: 'flex-start'}}>
                          <Text style={styles.text}>Gold Weight(Approx)</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                          <Text style={styles.text}>5.5392(gms)</Text>
                        </View>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{alignItems: 'flex-start'}}>
                          <Text style={styles.text}>Product</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'flex-end'}}>
                          <Text style={styles.text}>5.5392(gms)</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.008,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    // marginTop: 10
                  }}
                >
                  <View>
                    <TouchableOpacity
                      style={styles.addtocart}
                      onPress={() =>
                        this.onHandleAddToCart (
                          productId,
                          vendorId,
                          productPrice
                        )}
                    >
                      <Text style={styles.cartText}>Add To Cart</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.buynow}
                      onPress={() =>
                        this.props.navigation.navigate ('CheckoutView')}
                    >
                      <Text style={styles.buyText}>Buy Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.botomContainer}>
            <View style={styles.bottomTextContainer}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                  }}
                >
                  Net Wt in Cart
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                  }}
                >
                  10 Gm
                </Text>
              </View>
            </View>
            <View style={styles.bottomTextContainer}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                  }}
                >
                  Fine Wt in Cart
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                  }}
                >
                  10 Gm
                </Text>
              </View>
            </View>
            <View style={styles.bottomTextContainerlast}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                  }}
                >
                  Items in Cart
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: `${COLORS.MAINCOLOR.BLUE}`,
                  }}
                >
                  2
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Topbar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  category: state.category,
});
const mapDispatchToProps = {
  productDetail,
  addToCart,
  CartProduct,
};
export default connect (mapStateToProps, mapDispatchToProps) (ProductView);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container1: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexGrow: 0.9
  },
  productSider: {
    flex: 1,
  },
  image: {
    width: widthPercentageToDP ('73%'),
    height: heightPercentageToDP ('40.7%'),
    marginTop: 10,
  },
  productDetail: {
    flex: 3,
    // flexDirection: "column",
    // justifyContent: "center"
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  priceBrackupText: {
    color: 'lightblue',
    marginTop: 4,
    marginBottom: 4,
  },
  iconContainer: {
    // flex: 4,
    // flexDirection: 'column',
    // width: widthPercentageToDP('10%'),
    // height: heightPercentageToDP('40%'),

    // justifyContent: 'space-between',
    borderColor: 'lightblue',
    borderWidth: 1,
    padding: 4,
    marginLeft: 2,
  },
  productDetailText: {
    // flex: 1,
    // marginTop: 15,
    backgroundColor: `${COLORS.BLACK.LIGHTISGREY}`,
    // height: heightPercentageToDP('10%'),
    padding: 8,
  },
  productDetailText2: {
    // flex: 1 / 2,
    flexDirection: 'row',
    borderBottomColor: `${COLORS.BLACK.LIGHTGREY}`,
    paddingBottom: 2,
    borderBottomWidth: 2,
    marginTop: 3,
  },
  addtocart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: widthPercentageToDP ('40%'),
    paddingTop: 5,
    paddingBottom: 5,
    // paddingRight: 30,
    // paddingLeft: 30,
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    // width: widthPercentageToDP("36%")
  },
  buynow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `${COLORS.MAINCOLOR.BLUE}`,
    width: widthPercentageToDP ('35%'),
    height: heightPercentageToDP ('6%'),
    paddingTop: 5,
    paddingBottom: 5,
    // paddingRight: 30,
    // paddingLeft: 30
  },
  cartText: {
    color: `${COLORS.MAINCOLOR.BLUE}`,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  buyText: {
    textAlign: 'center',
    color: '#fff',
    flexWrap: 'wrap',
  },
  botomContainer: {
    // height: heightPercentageToDP('1%'),
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 2,
    borderTopColor: `${COLORS.BLACK.LIGHTBLACK}`,
    paddingTop: 10,
  },
  bottomTextContainer: {
    paddingTop: 7,
    // paddingLeft: ,
    width: widthPercentageToDP ('33%'),
    alignItems: 'center',
    borderRightWidth: 1,
    // height: heightPercentageToDP("10%"),
    borderRightColor: `${COLORS.MAINCOLOR.BLUE}`,
  },
  bottomTextContainerlast: {
    paddingTop: 7,
    // paddingLeft: 10,
    width: widthPercentageToDP ('33%'),
    alignItems: 'center',
  },
});
