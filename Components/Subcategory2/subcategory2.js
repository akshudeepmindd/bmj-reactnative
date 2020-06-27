import React, { useEffect, useState, Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, SIZE } from '../../constants/styles'
import Topbar from '../Common/MenuBar'
import GridView from '../Common/Grid'
import { subcategoriesVariable2 } from '../../constants'

export default class SubCategories2 extends Component {
  state = {
    catList: {}
  }
  componentDidMount () {
    let items = subcategoriesVariable2
    this.setState({
      catList: items
    })
  }
  render () {
    return (
      <Topbar alignMent='center' {...this.props}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Select Sub Category</Text>
          </View>
          <Text style={styles.subText}>
            Choose sub category as per your requirements
          </Text>
          <GridView
            screen='subcategory'
            listData={this.state.catList}
            columns={3}
            path='ProductView'
            {...this.props}
          />
        </View>
      </Topbar>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    marginTop: 30
  },
  subText: {
    fontSize: 15,
    marginTop: 20,
    color: `${COLORS.BLACK.GREY}`
  }
})
