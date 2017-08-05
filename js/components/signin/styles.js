
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    backgroundColor: '#eaeff2',
  },
  logo:{
    // position: 'absolute',
    //   marginTop: (Platform.OS === 'android') ? 20 : 16,
    alignSelf: 'center',
    width: 180,
    height: 60,
  },
    logo1:{
        // position: 'absolute',
        marginTop: (Platform.OS === 'android') ? 20 : -40,
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    logo2:{
        marginTop: (Platform.OS === 'android') ? 20 : -60,
        alignSelf: 'center',
        width: 220,
        height: 80,
    },
    logobox: {
        marginTop: (Platform.OS === 'android') ? 100 : 80,
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
    marginLeft:50
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
    borderColor: '#b0e0e6',
  },
    messagebox: {
        top:(Platform.OS === 'android') ? 1 : 50,
    },
    messagebody: {
      color: 'red',
        alignSelf:'center',
    },
    findpwbtn: {
        color: '#218BC8',
        alignSelf:'center',
    },
};
