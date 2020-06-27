import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZE} from '../../constants/styles';
import {Ionicons, SimpleLineIcons} from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {LinearGradient} from 'expo-linear-gradient';
import Logo from '../../assets/images/logo.png';
import {DrawerActions} from 'react-navigation-drawer';

export default class TopBar extends Component {
  render () {
    const {children, alignMent} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={{position: 'absolute', left: 10}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer ();
              }}
            >
              <Image
                style={{width: 30, height: 20}}
                source={require ('../../assets/images/menu.png')}
              />
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.textColor}>
              <Image
                style={styles.imageThumbnail}
                source={require ('../../assets/images/logo.png')}
              />
            </Text>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', right: 10}}>
            <View style={styles.rightIcons}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate ('Filter')}
                {...this.props}
              >
                <Image
                  style={{width: 35, height: 35}}
                  source={require ('../../assets/images/search.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.rightIcons}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate ('ShoppingView')}
                {...this.props}
              >
                <Image
                  style={{width: 35, height: 35}}
                  source={require ('../../assets/images/cart.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <LinearGradient
          colors={[
            `${COLORS.MAINCOLOR.BLUE}`,
            '#000',
            `${COLORS.MAINCOLOR.BLUE}`,
          ]}
          start={[0.1, 1]}
          end={[0.9, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 75,
            height: 6,
          }}
        />

        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: `${COLORS.WHITE.WHITE}`,
    marginTop: 20,
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
    width: wp ('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: SIZE.LARGE,
    borderRightColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderRightWidth: 5,
    borderRadius: 5,
    borderBottomColor: `${COLORS.MAINCOLOR.BLUE}`,
    borderBottomWidth: 5,
    // paddingTop: 20,
    paddingBottom: 6,
    width: wp ('30%'),
    height: hp ('8%'),
    padding: 0,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcons: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  imageThumbnail: {
    height: hp ('5%'),
    width: wp ('50%'),
  },
});
