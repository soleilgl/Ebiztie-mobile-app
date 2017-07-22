
import React, { Component } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Icon, Content, Button, Input, InputGroup, Text, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import { usernameInput, passwordInput, signin, LinkedinSignIn } from '../../actions';

const logo = require('../../../img/Ebiztie.jpg');
const wechat = require('../../../img/wechatimg.jpg');
const facebook = require('../../../img/facebookimg.jpg');
const linkedin = require('../../../img/linkedinimg.jpg');
const weibo = require('../../../img/weiboimg.jpg');
const tweeter = require('../../../img/tweeterimg.jpg');

class Signin extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.handleUernameInput = this.handleUernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleLinkedinSignIn = this.handleLinkedinSignIn.bind(this);
  }
  handleUernameInput(event) {
    this.props.dispatch(usernameInput(event.nativeEvent.text));
  }
  handlePasswordInput(event) {
    this.props.dispatch(passwordInput(event.nativeEvent.text));
  }
  handleLinkedinSignIn(){
  this.props.dispatch(LinkedinSignIn());
  }
  render() {
    return (
      <Container style={styles.container}>
      {/* <Header style={{ backgroundColor: '#FFF' }} >
          <View>
            <Image source={logo} style={styles.logo} />
          </View>
        </Header>*/}

        <Content>
          <View style={styles.logobox}>
          <Image source={logo} style={styles.logo} />
          </View>
          <View style={styles.loginbox}>
            <InputGroup rounded style={{ marginBottom: 30 }}>
              <Icon name="md-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="邮箱地址" type="text" ref="username" value={this.props.username} onChange={this.handleUernameInput} />
            </InputGroup>
            <InputGroup rounded>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="密码" secureTextEntry type="password" ref="password" value={this.props.password} onChange={this.handlePasswordInput} />
            </InputGroup>
          </View>

      {/* <View style={styles.wording}>
            <Text style={{color: '#218BC8'}}>其他登陆方式</Text>
          </View>
          <View style={styles.otherloginmethodsbox}>
            <TouchableOpacity>
              <Thumbnail size={80} source={facebook} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleLinkedinSignIn}>
              <Thumbnail size={80} source={linkedin} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail size={80} source={weibo} style={styles.icons} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Thumbnail size={80} source={tweeter} style={styles.icons} />
            </TouchableOpacity>
          </View>*/}

          <View style={styles.buttonbox} >
            <Button block style={styles.signinbtn} onPress={() => this.props.dispatch(signin())} title="Go to Partnership page" >
              <Text style={{ fontSize: 15 }} >登陆</Text>
            </Button>
            <Button block style={styles.signupbtn} onPress={() => this.props.navigation.navigate('Signup', {})} title="Go to Signup page" >
              <Text style={{ color: 'black', fontSize: 15 }} >注册</Text>
            </Button>
          </View>
          <View style={styles.messagebox}>
          <Text style={styles.messagebody}>{this.props.message}</Text>
          </View>
          <View>
          <Text style={styles.findpwbtn}>忘记密码？</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  message: state.signin,
});

export default connect(mapStateToProps)(Signin);
