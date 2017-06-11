import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, ScrollView } from 'react-native';
import { Container, Header, Title, Card, Button, Icon, Text, Footer, FooterTab, Thumbnail, Content, List, ListItem, Body } from 'native-base';
import styles from './styles';

import { Home } from '../../AppNavigator';

const deviceHeight = Dimensions.get('window').height;

const winnerimg = require('../../../img/home/Winner.png');
const Hans = require('../../../img/home/Hans.png');
const Hao = require('../../../img/home/Hao.png');
const Kevin = require('../../../img/home/Kevin.png');
const MrLink = require('../../../img/home/MrLink.png');
const kaihua = require('../../../img/home/kaihua.png');

class ChatDetail extends Component {
  static navigationOptions = {
    title: '聊天记录',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#218BC8',
      height:deviceHeight / 15,
    },
    headerTitleStyle: {
      fontSize: 15,
    },
    headerRight: <Icon name="ios-options" style={{ color: 'white', marginRight: 10 }} />
  };
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <List>
              <ListItem>
                <TouchableOpacity>
                  <Thumbnail rounded size={80} source={winnerimg} />
                </TouchableOpacity>
                <Body>
                  <Text note>Its time to build a difference . .</Text>
                </Body>
              </ListItem>
              <ListItem>
                <TouchableOpacity>
                  <Thumbnail rounded size={80} source={Hans} />
                </TouchableOpacity>
                <Body>
                  <Text note>Its time to build a difference . .</Text>
                </Body>
              </ListItem>
          </List>
        </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button
              onPress={() => this.props.navigation.navigate('Partner', {})}
              title="Go to Partner page">
              <Icon name="ios-home-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Hotnews', {})}
              title="Go to Notification page">
              <Icon name="ios-paper-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Favorite', {})}
              title="Go to Favorite page">
              <Icon name="ios-person-add-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Chat', {})}
              title="Go to Chat page">
              <Icon name="ios-chatboxes-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Activity', {})}
              title="Go to Activity page">
              <Icon name="ios-bicycle-outline" style={styles.footericon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ChatDetail;
