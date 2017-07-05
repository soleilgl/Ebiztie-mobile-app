
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    backgroundColor: '#FFF',
  },
    contentbox: {
        marginRight: (Platform.OS === 'android') ? 0 : 5,
    },
  logo:{
    position: 'absolute',
      top: (Platform.OS === 'android') ? 10 : 6,
    alignSelf: 'center',
    width: 120,
    height: 40,
  },
  submitbtn:{
    backgroundColor: '#218BC8',
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
    messagebox: {
        top:0,
    },
    messagebody: {
        color: 'red',
        alignSelf:'center',
    },
    introbox:{
     marginLeft:10,
        marginTop: 10,
    },
};
