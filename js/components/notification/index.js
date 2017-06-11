import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, Content, Header, Title, Card, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import styles from './styles';

import { Home } from '../../AppNavigator';

const deviceHeight = Dimensions.get('window').height;

class Notification extends Component {
  static navigationOptions = {
    title: '我的通知',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#218BC8',
      height: deviceHeight / 15,
    },
    headerTitleStyle: { fontSize: 15 },
  };
  render() {
    return (
      <Container>
        <Content>
        <Text>notification page is coming soon</Text>
      </Content>
        <Footer style={styles.footer}>
          <FooterTab style={styles.footer}>
            <Button
              onPress={() => this.props.navigation.navigate('Hotnews', {})}
              title="Go to Notification page">
              <Icon name="ios-paper-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Favorite', {})}
              title="Go to Favorite page">
              <Icon name="ios-person-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Chat', {})}
              title="Go to Chat page">
              <Icon name="ios-text-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Activity', {})}
              title="Go to Activity page">
              <Icon name="ios-walk-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Setup', {})}
              title="Go to Setup page">
              <Icon name="ios-settings-outline" style={styles.footericon} />
            </Button>
            <Button
              title="Go to Notification page">
              <Icon name="ios-notifications-outline" style={styles.footericon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Notification;
