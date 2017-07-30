import React, { Component } from 'react';
import { Container, Content, Header, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail } from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';
import { uploadImageRegister, getProfileImage } from '../../actions';


const deviceHeight = Dimensions.get('window').height;

class VIP extends Component {
    static navigationOptions = {
        title: 'VIP',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#218BC8',
            height:deviceHeight / 15,
        },
        headerTitleStyle:{
            fontSize:15
        }
    };
    render() {
        return (
        <Container style={styles.container}>
         <Text>VIP service page</Text>
        </Container>
    );
    }
}
export default VIP;
