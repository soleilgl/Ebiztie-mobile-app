import React, { Component, } from 'react';
import { Container, View, Header, Card, Title, Button, Icon, Thumbnail, Left, Right, Footer, FooterTab } from 'native-base';
import { ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { getMyInfo } from '../../actions';


import { ChangePartnership } from '../../AppNavigator';

const winnerimg = require('../../../img/home/Winner.png');
const Hans = require('../../../img/home/Hans.png');
const Hao = require('../../../img/home/Hao.png');
const Kevin = require('../../../img/home/Kevin.png');
const MrLink = require('../../../img/home/MrLink.png');
const kaihua = require('../../../img/home/kaihua.png');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Partner extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '',
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#218BC8',
      height: deviceHeight / 15,
    },
    headerTitleStyle: {
      fontSize: 15,
      marginLeft: (Platform.OS === 'android') ? 150 : 40,
    },
    //headerRight: <Button transparent onPress={() => navigation.navigate('DrawerOpen')}><Icon name="ios-options" style={styles.drawerIcon} /></Button>,
    headerRight: <Button transparent onPress={() => navigation.navigate('Notification')}><Icon name="ios-notifications" style={styles.drawerIcon} /></Button>,
    headerLeft: <Button transparent onPress={() => navigation.navigate('Search')}><Icon name="ios-search" style={styles.searchIcon} /></Button>,
    //drawerLabel: '首页',
    drawerIcon: <Icon name="ios-home" style={{ color: '#218BC8'}} />,
    drawerStyle: {
      backgroundColor: 'green',
    },
  });
  constructor(props) {
      super(props);
      this.handleMyInfo =  this.handleMyInfo.bind(this);
  }
  handleMyInfo() {
      this.props.dispatch(getMyInfo())
  }

  render() {
    return (
      <Container style={styles.container}>
        {/* <Header style={styles.header} >
          <Left>
            <Icon name="ios-menu" style={{ color: 'white' }} onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Title style={{ fontSize: 15, alignSelf: 'center', left:40 }} >首页 + 推荐</Title>
          <Right>
            <Icon name="ios-search" style={{ color: 'white' }} onPress={() => this.props.navigation.navigate('Search')} />
          </Right>
        </Header> */}
        <View style={styles.partnerbox}>
          <ChangePartnership screenProps={{ rootNavigation: this.props.navigation }} />
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
              <Icon name="ios-calendar-outline" style={styles.footericon} />
            </Button>
            <Button
            onPress={this.handleMyInfo}
            title="Go to Setup page">
                <Icon name="ios-settings-outline" style={styles.footericon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
    avatarSource: state.avatarSource,
})
export default connect(mapStateToProps) (Partner);