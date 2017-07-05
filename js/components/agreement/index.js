import React, { Component } from 'react';
import { Container, Text } from 'native-base';
import { Dimensions } from 'react-native';

import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Agreement extends Component { // eslint-disable-line
    static navigationOptions = {
        headerMode: 'none',
        title: '返回',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#218BC8',
            height: deviceHeight / 15,
        },
        headerTitleStyle: {
            fontSize: 15
        },
    };

    render() {
        return (
            <Container style={styles.container}>
         <Text>agreement中文</Text>

        </Container>
    );
    }
}
export default Agreement;
