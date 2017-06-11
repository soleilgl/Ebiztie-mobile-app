
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#FFF',
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
    // padding: 1,
    // marginLeft: 5,
    // marginRight: 5,
  },
};
