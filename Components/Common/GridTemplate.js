import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {COLORS, SIZE} from '../../constants/styles';
import {subcategoryList, productList} from '../Redux/actions/categoryActions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 15) / 2;

function GridTemplate (props) {
  const subcategoryFunction = async () => {
    const {user, subcategory, navigation} = props;
    let token = user.user.data.token;
    if (props.path == 'SubCategories') {
      let params = {categoryName: props.categoryName};
      await props.subcategoryList (params, token);
      // let params = {
      //   filter: {productCategory: [props.subcategoryName]},
      //   view: ['discription'],
      //   sort: {productName: 1},
      // };
      // await props.productList (params, token);
    } else {

      let params = {
        filter: {productCategory: [props.subcategoryName]},
        view: ['discription'],
        sort: {productName: 1},
      };
      let id = await props.productList (params, token);

      // let params = {categoryName: props.categoryName};
      // await props.subcategoryList (params, token);
    }
    props.navigation.navigate (`${props.path}`);
  };

  return (
    <View
      style={
        props.path === 'SubCategories' ? styles.container : styles.container2
      }
    >
      <View
        style={
          props.columns > 2 ? styles.innerContainer : styles.innerContainer2
        }
      >
        {props.path && props.dynamic
          ? <TouchableOpacity onPress={subcategoryFunction}>
              <Image
                style={
                  props.path === 'SubCategories'
                    ? styles.imageThumbnail
                    : styles.imageThumbnail2
                }
                resizeMode={'contain'}
                source={{uri: props.image}}
              />
            </TouchableOpacity>
          : <Image
              style={
                props.path === 'SubCategories'
                  ? styles.imageThumbnail
                  : styles.imageThumbnail2
              }
              resizeMode={'contain'}
              source={props.image}
            />}
      </View>
      <Text
        style={
          props.path === 'SubCategories' ? styles.textStyle : styles.textStyle2
        }
      >
        {props.purity !== '' ? props.text + ' ' + props.purity : props.text}
      </Text>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  subcategory: state.category,
  product: state.subcategory,
});
const mapDispatchToProps = {
  subcategoryList,
  productList,
};

export default connect (mapStateToProps, mapDispatchToProps) (GridTemplate);
const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: hp ('32%'),
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp ('28%'),
  },
  innerContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    borderWidth: 1,
    padding: 20,
    width: wp ('28%'),
    height: hp ('17%'),

    margin: 10,
  },
  innerContainer2: {
    // borderRadius: 10,
    // padding: 20,
    width: wp ('30%'),
    height: hp ('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    // borderWidth: 1,
    margin: 20,
  },
  imageThumbnail: {
    width: wp ('32%'),
    height: hp ('19%'),
    borderRadius: 8,
  },
  imageThumbnail2: {
    width: wp ('20%'),
    height: hp ('20%'),
  },
  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: hp ('20%'),
    width: wp ('29%'),
    textAlign: 'center',
    flexDirection: 'row',
    // flex: 1,
    flexWrap: 'wrap',
    paddingTop: 30,
  },
  textStyle2: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp ('20%'),
    width: wp ('29%'),
    textAlign: 'center',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
  },
});
