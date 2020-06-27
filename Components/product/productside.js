import React, {useEffect, useState, Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {COLORS} from '../../constants/styles';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import {listVariable} from '../../constants/index';
import ProductTemplate from '../Common/productListTemplate';

export default class ProductSlider extends Component {
  state = {
    listItem: '',
    scrollEnabled: false,
  };
  componentDidMount () {
    let item = listVariable;
    if (item.length > 5) {
      this.setState ({
        scrollEnabled: true,
        listItem: item,
      });
    }
    this.setState ({
      listItem: item,
    });
  }
  render () {
    return (
      <ScrollView contentContainerStyle={styles.conatiner}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome
              name="sort-up"
              size={20}
              color="#000"
              padding={20}
              backgroundColor={COLORS.BLACK.LIGHTGREY}
            />
          </TouchableOpacity>
          <View style={styles.productlist}>
            <FlatList
              data={
                this.props.productList && this.props.productList.length
                  ? this.props.productList
                  : this.state.listItem
              }
              numColumns={1}
              scrollEnabled={this.state.scrollEnabled}
              renderItem={({item}) => (
                <ProductTemplate
                  id={item._id}
                  image={item.img || ''}
                  text={item.name}
                  columns={1}
                  {...this.props}
                />
              )}
            />
          </View>

          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome
              name="sort-up"
              size={20}
              color="#000"
              // padding={20}
              backgroundColor={COLORS.BLACK.LIGHTGREY}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: `${COLORS.BLACK.LIGHTGREY}`,
    // padding: 10,
    margin: 1,
    width: widthPercentageToDP ('20%'),
    height: heightPercentageToDP ('2%'),
    alignItems: 'center',
    paddingLeft: 5,
    paddingBottom: 12,
    marginLeft: 10,
  },
  iconContainer2: {
    backgroundColor: `${COLORS.BLACK.LIGHTGREY}`,
    // padding: 10,
    margin: 1,
    width: widthPercentageToDP ('25%'),
    alignItems: 'center',
    paddingLeft: 5,
    paddingBottom: 12,
    marginLeft: 30,
  },
  innerContainer: {
    // marginTop: 20,
    paddingTop: 10,
    // height: heightPercentageToDP('80%')
  },
  productlist: {
    // height: heightPercentageToDP('73%'),
    width: widthPercentageToDP ('25%'),
  },
});
