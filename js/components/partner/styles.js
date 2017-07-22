import { Platform } from 'react-native';
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#eaeff2',
  },
  header: {
    backgroundColor: '#218BC8',
    height: deviceHeight / 15,
  },
  recommandationbox_img: {
    marginLeft: 2,
    marginRight: 2,
  },
  footer: {
    backgroundColor: '#218BC8',
    height: deviceHeight / 15,
  },
  footericon: {
    color: 'white',
  },
  partnerbox: {
    flex: 8,
  },
  drawerIcon: {
    color: '#ffffff',
      marginRight: 10,
      // iconFontSize: (Platform.OS === 'android' ) ? 30 : 15,
      // iconLineHeight: (Platform.OS === 'android' ) ? 37 : 30,
  },
  searchIcon: {
    color: 'white',
      marginRight: 10,
  },
};
