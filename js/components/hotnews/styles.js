
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
  footer: {
    backgroundColor: '#218BC8',
    height: deviceHeight / 15,
  },
  footertext: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  footericon: {
    color: 'white',
  },
  partnerbox: {
    flex: 1,
  },
  mb: {
    marginBottom: 15,
  },
};
