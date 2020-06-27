import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import TopBar from '../Common/MenuBar'
import { ScrollView } from 'react-native-gesture-handler'
import { PolicyVariables } from '../../constants'
import { COLORS, widthPercentageToDP } from '../../constants/styles'

export default function PrivacyPolicy (props) {
  return (
    <View style={styles.container}>
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
              Privacy Policy
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontWeight: 'bold',
                paddingBottom: 10
              }}
            >
              Definations
            </Text>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text style={{ fontSize: 20 }}>{'\u2022' + ' '}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text>
                    <Text style={styles.normalText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text style={{ fontSize: 20 }}>{'\u2022' + ' '}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text>
                    <Text style={styles.normalText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.row}>
                <View style={styles.bullet}>
                  <Text style={{ fontSize: 20 }}>{'\u2022' + ' '}</Text>
                </View>
                <View style={styles.bulletText}>
                  <Text>
                    <Text style={styles.normalText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: `center`,
              padding: 10
            }}
          >
            <View
              style={{
                alignItems: `center`
              }}
            >
              <TouchableOpacity
                style={styles.shopping}
                onPress={() => props.navigation.navigate(`MyAccount`)}
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 15,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`
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
  },
  textContainer: {
    flex: 1,
    padding: 10
  },
  text: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    lineHeight: 20
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
    paddingLeft: 2
  },
  bullet: {
    width: 15
  },
  bulletText: {
    flex: 1,
    paddingTop: 2
  },
  boldText: {
    fontWeight: 'bold'
  }
})
