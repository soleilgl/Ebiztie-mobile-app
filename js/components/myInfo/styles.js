
const React = require('react-native');

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
    container: {
        backgroundColor: '#fff',
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
        marginTop:0,
        marginBottom: 20,
    },
    change_img: {
        alignSelf: 'center',
        width: deviceWidth,
        backgroundColor: '#eaeff2'
    },
buttonbox:{
    flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    marginBottom:40,
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
};
