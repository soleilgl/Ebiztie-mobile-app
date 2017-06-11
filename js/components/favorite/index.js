import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container, View, Button, Icon, Card, Footer, FooterTab } from 'native-base';
import styles from './styles';

import { MyFavorite, Home } from '../../AppNavigator';

const deviceHeight = Dimensions.get('window').height;

class Favorite extends Component {
  static navigationOptions = {
    title: '我的收藏',
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
        <View style={styles.partnerbox}>
          <MyFavorite screenProps={{ rootNavigation: this.props.navigation }}/>
        </View>
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

export default Favorite;
