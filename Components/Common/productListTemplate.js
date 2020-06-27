import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {productDetail} from '../Redux/actions/categoryActions';
import {COLORS, SIZE} from '../../constants/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 15) / 2;

class ProductTemplate extends Component {
  activateProduct = async id => {
    const {category, productDetail} = this.props;
    let selectedProduct =
      category &&
      category.product &&
      category.product.data.find (item => item._id == id);
    await productDetail (selectedProduct);
  };
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => this.activateProduct (this.props.id)}
          >
            <Image
              style={styles.imageThumbnail}
              source={
                !this.props.image
                  ? require ('../../assets/images/product6.png')
                  : {uri: this.props.image}
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category,
});
const mapDispatchToProps = {
  productDetail,
};

export default connect (mapStateToProps, mapDispatchToProps) (ProductTemplate);
const styles = StyleSheet.create ({
  container: {
    marginTop: 2,
    // flex: 1 / 2,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 10,
    // marginRight: 10
  },
  innerContainer: {
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    // margin: 5,
    width: wp ('25%'),
    height: hp ('12%'),
    textAlign: 'center',
  },
  innerContainer2: {
    borderRadius: 10,
    padding: 20,
    width: wp ('35%'),
    height: hp ('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    borderWidth: 1,
    margin: 15,
  },
  imageThumbnail: {width: wp ('20%'), height: hp ('12%')},
  textStyle: {
    paddingBottom: 20,
    paddingTop: 20,
  },
});
