import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {COLORS, SIZE} from '../constants/styles';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export default function CommonLayout (props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Text style={styles.textColor}>
          <Image
            style={styles.imageThumbnail}
            source={require ('../assets/images/logo.png')}
          />
        </Text>
        {props.children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: `${COLORS.WHITE.WHITE}`,
    borderTopColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderTopWidth: 30,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 30,
    alignItems: 'center',
  },
  textColor: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    fontSize: SIZE.LARGE,
    borderRightColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRightWidth: 5,
    borderRadius: 5,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 5,
    // paddingTop: 20,
    paddingBottom: 5,
    width: widthPercentageToDP ('60%'),
    height: heightPercentageToDP ('18%'),
    padding: 0,
  },
});
