import React, {useEffect, useState, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, SIZE} from '../../constants/styles';
import Topbar from '../Common/MenuBar';
import GridView from '../Common/Grid';
import {categoriesVariable} from '../../constants';
import {categoryList} from '../Redux/actions/categoryActions';
import {connect} from 'react-redux';

class Categories extends Component {
  state = {
    catList: {},
    redirectPath: '',
  };

  async componentDidMount () {
    const {categoryList, user, category} = this.props;

    await this.props.categoryList (user.user.data.token);
  }

  render () {
    // console.log (this.state.catList, 'categiryr');
    return (
      <Topbar {...this.props}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Select Category</Text>
          </View>
          <Text style={styles.subText}>
            Choose category as per your requirements
          </Text>
          <GridView
            screen="category"
            listData={
              this.props.category &&
                this.props.category.categoryList &&
                this.props.category.categoryList.data
            }
            columns={2}
            dynamic={true}
            path="SubCategories"
            {...this.props}
          />
        </View>
      </Topbar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  category: state.category,
});
const mapDispatchToProps = {
  categoryList,
};
export default connect (mapStateToProps, mapDispatchToProps) (Categories);

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
