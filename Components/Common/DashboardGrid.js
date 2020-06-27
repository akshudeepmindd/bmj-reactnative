import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {COLORS, SIZE} from '../../constants/styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 15) / 2;

export default function DashboardGridTemplate (props) {
  return (
    <View style={styles.container}>
      <View
        style={
          props.columns > 2 ? styles.innerContainer : styles.innerContainer2
        }
      >
        <TouchableOpacity
          onPress={() => props.navigation.navigate (`${props.path}`)}
        >
          <Image
            style={styles.imageThumbnail}
            source={props.image}
            resizeMode={'contain'}
          />
        </TouchableOpacity>

        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp ('31%'),
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp ('25%'),
  },
  innerContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: `${COLORS.BLACK.LIGHTGREY}`,
    borderWidth: 1,
    padding: 20,
    width: wp ('28%'),
    height: hp ('17%'),

    margin: 10,
  },
  innerContainer2: {
    // flex: 10,
    borderRadius: 10,
    // padding: 20,
    width: wp ('40%'),
    height: hp ('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderWidth: 1,
    margin: 15,
  },
  imageThumbnail: {width: wp ('30%'), height: hp ('16%')},
  imageThumbnail2: {
    width: wp ('20%'),
    height: hp ('25%'),
  },
  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap',
  },
});
