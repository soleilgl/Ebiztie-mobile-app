import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Header, Button, Icon, Input, Content, Text, Item } from 'native-base';
import styles from './styles';

const deviceHeight = Dimensions.get('window').height;

export default class Search extends Component { // eslint-disable-line
  static navigationOptions = {
    title: '返回',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#218BC8',
      height: deviceHeight / 15,
    },
    headerTitleStyle: {
      fontSize: 15,
    },
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.searchbox}>
          <Item>
            <Icon active name="search" />
            <Input placeholder="寻找合伙人， 商机， 项目" />
            <Icon active name="people" />
          </Item>
        </Header>

        <Content padder>
          <Button block style={styles.searchbtn}><Text>查找</Text></Button>
        </Content>
      </Container>
    );
  }
}
