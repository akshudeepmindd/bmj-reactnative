import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Topbar from '../Common/MenuBar';
import {connect} from 'react-redux';
import {DashboardVariables} from '../../constants';
import {COLORS} from '../../constants/styles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import GridView from '../Common/Grid';

class Dashboard extends Component {
  state = {
    dashboardList: [],
  };
  async componentDidMount () {
    let item = DashboardVariables;
    this.setState ({
      dashboardList: item,
    });
  }
  render () {
    return (
      <Topbar {...this.props}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.imagetextContainer}>
              <View>
                <Image
                  style={{width: 26, height: 33}}
                  source={require ('../../assets/images/key.png')}
                />
              </View>
              <View style={styles.firstText}>
                <Text style={{textAlign: 'center', fontSize: 10}}>
                  100+ Products We add EveryDay
                </Text>
              </View>
            </View>
            <View style={styles.imagetextContainer}>
              <View>
                <Image
                  style={{width: 12, height: 33}}
                  source={require ('../../assets/images/deliveryboy.png')}
                />
              </View>
              <View style={styles.firstText}>
                <Text style={{textAlign: 'center', fontSize: 10}}>
                  Fastest & Insured Delivery at Counter
                </Text>
              </View>
            </View>
            <View style={styles.imagetextContainer}>
              <View>
                <Image
                  style={{width: 39, height: 33}}
                  source={require ('../../assets/images/back.png')}
                />
              </View>
              <View style={styles.firstText}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 10,
                  }}
                >
                  Easy Return Policy
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: `${COLORS.BLACK.lGrey}`,
            }}
          >
            <GridView
              screen="dashboard"
              listData={this.state.dashboardList}
              columns={2}
              // path='SubCategories'
              {...this.props}
            />
          </View>
        </View>
      </Topbar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect (mapStateToProps) (Dashboard);
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderBottomColor: `${COLORS.BLACK.LIGHTBLACK}`,
    borderBottomWidth: 1,
    alignItems: 'stretch',
    paddingBottom: 10,
  },
  firstText: {
    flex: 1,
  },
  imagetextContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
