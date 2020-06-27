import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function CommonBottomLayout (props) {
  const {
    mainContainerStyle,
    buttonText,
    buttonOnPress,
    buttonTextOnPress,
    buttonTextValue,
    buttonStyle
  } = props
  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      {props.children}
      <View style={mainContainerStyle}>
        <View>
          <TouchableHighlight
            activeOpacity={1}
            style={buttonStyle}
            onPress={() => props.navigation.navigate(`${props.path}`)}
          >
            <Text style={buttonText}>{buttonTextValue}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  )
}
