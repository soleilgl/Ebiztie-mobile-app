import React, { Component } from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Button, Icon, Text, Footer, FooterTab, Body, List } from 'native-base';
import styles from './styles';

import { Home } from '../../AppNavigator';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const news_img = require('../../../img/news_img1.jpg');

class Hotnews extends Component {
  static navigationOptions = {
    title: '中美热点商务快报',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#218BC8',
      height: deviceHeight / 15,
    },
    headerTitleStyle: {
      fontSize: 15
    },
    headerRight: <Icon name="ios-options" style={{ color: 'white', marginRight: 10 }} />,
  };

  getDetails = () => {
    this.props.navigation.navigate('HotnewsDetail', {});
  };
  render() {
    return (
      <Container style={styles.container}>
          <Content padder>
            <List>
          <Card>
            <CardItem bordered>
              <Body>
              <Text>06/28/2017</Text>
              <Text>Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。</Text>
            </Body>
            </CardItem>
              <CardItem>
                <Body >
                  <TouchableOpacity onPress={() => this.getDetails()}>
                  <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={news_img} />
                  </TouchableOpacity>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem bordered>
                <Body>
                <Text>06/28/2017</Text>
                <Text>Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。</Text>
              </Body>
              </CardItem>
                <CardItem>
                  <Body >
                    <TouchableOpacity onPress={() => this.getDetails()}>
                    <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={news_img} />
                    </TouchableOpacity>
                  </Body>
                </CardItem>
              </Card>
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

export default Hotnews;
