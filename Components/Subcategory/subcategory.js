import React, {useEffect, useState, Component} from 'react';

import {connect} from 'react-redux';
import {subcategoryList} from '../Redux/actions/categoryActions';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {COLORS, SIZE} from '../../constants/styles';
import Topbar from '../Common/MenuBar';
import GridView from '../Common/Grid';
import {subcategoriesVariable} from '../../constants';
// import { backhandler } from './../back'

class SubCategories extends Component {

  render () {
    return (
      <Topbar alignMent="center" {...this.props}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Select Sub Category</Text>
          </View>
          <Text style={styles.subText}>
            Choose sub category as per your requirements
          </Text>
          <GridView
            screen="subcategory"
            listData={
              this.props.subcategory &&
                this.props.subcategory.subcategory &&
                this.props.subcategory.subcategory.data
            }
            dynamic={true}
            columns={3}
            path="ProductView"
            {...this.props}
          />
        </View>
      </Topbar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  subcategory: state.category,
});

const mapDispatchToProps = {
  subcategoryList,
};
export default connect (mapStateToProps, mapDispatchToProps) (SubCategories);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 30,
  },
  subText: {
    fontSize: 15,
    marginTop: 20,
    color: `${COLORS.BLACK.GREY}`,
  },
});
