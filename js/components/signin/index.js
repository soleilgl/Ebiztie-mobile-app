
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Icon, Content, Button, Input, InputGroup, Text, Thumbnail } from 'native-base';

import styles from './styles';

const logo = require('../../../img/Ebiztie.jpg');
const wechat = require('../../../img/wechatimg.jpg');
const facebook = require('../../../img/facebookimg.jpg');
const linkedin = require('../../../img/linkedinimg.jpg');
const weibo = require('../../../img/weiboimg.jpg');
const tweeter = require('../../../img/tweeterimg.jpg');

class Signin extends Component {
  static navigationOptions = {
      header: null
    }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#FFF' }} >
          <View>
            <Image source={logo} style={styles.logo} />
          </View>
        </Header>

        <Content>
          <View style={styles.loginbox}>
            <InputGroup rounded style={{ marginBottom: 30 }}>
              <Icon name="md-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="用户名" />
            </InputGroup>
            <InputGroup rounded>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="密码" secureTextEntry />
            </InputGroup>
          </View>

          <View style={styles.wording}>
            <Text>SINGN IN HERE</Text>
          </View>

          <View style={styles.otherloginmethodsbox}>
            <TouchableOpacity>
              <Thumbnail size={80} source={wechat} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail size={80} source={facebook} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail size={80} source={linkedin} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail size={80} source={weibo} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail size={80} source={tweeter} style={styles.icons} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonbox} >
            <Button block style={styles.signinbtn} onPress={() => this.props.navigation.navigate('PartnershipStack', {})}
              title="Go to Partnership page" >
              <Text style={{ fontSize: 15 }} >登陆</Text>
            </Button>
            <Button block style={styles.signupbtn} onPress={() => this.props.navigation.navigate('Signup', {})}
              title="Go to Signup page" >
              <Text style={{ color: 'black', fontSize: 15 }} >注册</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}


export default Signin;
