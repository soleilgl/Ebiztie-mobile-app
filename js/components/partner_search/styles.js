
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#FFF',
  },
  searchbox: {
    backgroundColor:'#218BC8',
  },
  searchbtn: {
    backgroundColor:'#218BC8',
  },
};
