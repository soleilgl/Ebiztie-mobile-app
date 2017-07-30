
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#eaeff2',
  },
  mb: {
    marginBottom: 15,
  },
  header: {
    backgroundColor: '#218BC8',
    height: deviceHeight / 15,
  },
  btns: {
    marginBottom: 10,
    width: deviceWidth / 1.5,
  },
  btns_text: {
    color: '#DD5044',
    fontSize: 13,
  },
};
