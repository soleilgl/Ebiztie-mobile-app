import React, { Component } from 'react';
import { Image, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Button, H3, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import type { Action } from '../../actions/types';
import styles from './styles';

const launchscreenBg = require('../../../img/firstpage_background.jpg');
const launchscreenLogo = require('../../../img/Ebiztie.jpg');

const data = [
  {
    route: 'Signin',
  },
];

const {
  popRoute, pushRoute,
} = actions;

class Home extends Component { // eslint-disable-line

  static propTypes = {
    pushRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route) {
  this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
}

  render() {
    return (
      <Container>
        <StatusBar barStyle={'light-content'} />
        <View source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <Image source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ alignItems: 'center', marginBottom: 50, backgroundColor: 'transparent' }}>
            <H3 style={styles.text}>中文名字</H3>
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: '#b0e0e6', alignSelf: 'center' }}
              onPress={() => { Actions[data.route]();  this.props.pushRoute()}}
            >
              <Text>点击进入</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Home);
