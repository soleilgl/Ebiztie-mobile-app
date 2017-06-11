import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Center, Left, Right, Body, List, ListItem, } from 'native-base';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';


const Hao = require('../../../img/home/Hao.png');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class FavoriteBusinessDetail extends Component { // eslint-disable-line
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
  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
                <Image source={level} style={{marginRight:20}}/>
                <Icon name="ios-person" style={{ color: 'green' }} />
                <Icon name="ios-people" style={{ color: 'black' }} />
              <Right>
                <Body>
                  <Text>Ebiztie</Text>
                  <Text note>USA</Text>
                </Body>
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={Hao} />
                <Text>
                  myFavorite
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
