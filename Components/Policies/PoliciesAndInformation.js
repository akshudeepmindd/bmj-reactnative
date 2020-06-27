import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TopBar from '../Common/MenuBar'
import { ScrollView } from 'react-native-gesture-handler'
import { PolicyVariables } from '../../constants'
import { COLORS, widthPercentageToDP } from '../../constants/styles'

export default function PoliciesAndInformation (props) {
  return (
    <TopBar {...props}>
      <ScrollView>
        <View
          style={{
            padding: 10,
            paddingTop: 20,
            paddingLeft: 15
          }}
        >
          <Text
            style={{
              fontWeight: 'bold'
            }}
          >
            Our Policies And Infomation
          </Text>
        </View>
        {PolicyVariables.map((pol, key) => (
          <View style={styles.column}>
            <View style={styles.row}>
              <View style={styles.bullet}>
                <Text style={{ fontSize: 20 }}>{'\u2022' + ' '}</Text>
              </View>
              <View style={styles.bulletText}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate(`${pol.path}`)}
                >
                  <Text>
                    <Text style={styles.normalText}>{pol.text}</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: `center`,
            alignItems: 'center',
            padding: 10
          }}
        >
          <View
            style={{
              alignItems: `center`,
              justifyContent: `center`
            }}
          >
            <TouchableOpacity
              style={styles.shopping}
              onPress={() => this.props.navigation.navigate(`MyAccount`)}
            >
              <Text
                style={{
                  color: `${COLORS.MAINCOLOR.BLUE}`,
                  textAlign: `center`
                }}
              >
                Back To MyAccount
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TopBar>
  )
}

const styles = StyleSheet.create({
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP('50%'),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start'
    // width: 200
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 20
  },
  bullet: {
    width: 20
  },
  bulletText: {
    flex: 1,
    paddingTop: 2
  },
  boldText: {
    fontWeight: 'bold'
  },
  shopping: {
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 2,
    backgroundColor: `#fff`,
    width: widthPercentageToDP('50%'),
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 30,
    paddingLeft: 30
  }
})
