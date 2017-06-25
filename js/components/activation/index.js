import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Center, Left, Right, Body, List, ListItem, } from 'native-base';
import { View, TouchableOpacity } from 'react-native';

import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class ActivateUser extends Component { // eslint-disable-line
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
          <Card>
            <CardItem bordered>
                  <Text>等待账户激活</Text>
            </CardItem>

            <CardItem bordered>
              <Text>
                  欢迎访问 Ebiztie！请激活账户后使用。
                  账户激活邮件已发送至您的邮箱，如需重发请点击
              </Text>
            </CardItem>
            <CardItem bordered>
              <Button block style={styles.signinbtn} title="Go to activation page" ><Text>点击重发</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
