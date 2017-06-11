
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    backgroundColor: '#FFF',
  },
  logo:{
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    width: 120,
    height: 40,
  },
  submitbtn:{
    backgroundColor: '#218BC8',
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
};
