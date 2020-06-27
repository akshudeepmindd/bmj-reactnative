import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { COLORS, SIZE } from '../constants/styles'

export default function SimpleLayout (props) {
  return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${COLORS.WHITE.WHITE}`,
    borderTopColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderTopWidth: 40,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 40,
    alignItems: 'center'
  },
  textColor: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: SIZE.LARGE,
    borderRightColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRightWidth: 5,
    borderRadius: 5,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 5,
    paddingTop: 20,
    paddingBottom: 10,
    width: 200,
    padding: 0
  }
})
