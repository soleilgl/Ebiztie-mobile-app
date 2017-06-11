import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Center, Left, Right, Body, List, ListItem, } from 'native-base';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';


const activity = require('../../../img/group-photo.jpg');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class ActivityDetail extends Component { // eslint-disable-line
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
              <Left>
                <Body>
                  <Text>Ebiztie合伙人活动</Text>
                  <Text note>08/01/2017</Text>
                </Body>
              </Left>
              <Icon name="ios-people" style={{ color: 'black' }} />
              <Right />
            </CardItem>

            <CardItem>
              <Body>
                <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={activity} />
                <Text>
                  myActivity
                    myActivity
                      myActivity
                        myActivity
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
