
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
  text:{
    fontSize: 10,
  },
  loginbox:{
     padding:20,
     marginTop:50,
     marginBottom: 20
  },
  buttonbox:{
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 50
  },
  otherloginmethodsbox:{
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop:10
  },
  icons:{
      alignSelf: 'center',
      marginLeft: 5,
      marginRight: 5
  },
  wording:{
    marginLeft:20
  },
  signinbtn:{
    backgroundColor: '#218BC8',
    width: 200,
    marginRight: 10
  },
  signupbtn:{
    backgroundColor: 'white',
    width: 100,
    borderWidth: 1,
    borderColor: '#b0e0e6'
  },
};