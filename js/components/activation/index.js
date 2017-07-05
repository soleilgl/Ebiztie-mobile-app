import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, Center, Left, Right, Body, List, ListItem, } from 'native-base';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { resendActivationEmail } from '../../actions';

import styles from './styles';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ActivateUser extends Component { // eslint-disable-line
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
  constructor (props) {
    super(props);
      this.handleResendActivationEmail = this.handleResendActivationEmail.bind(this);
  };
  handleResendActivationEmail(){
    this.props.dispatch(resendActivationEmail())
    }

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
                  欢迎访问 Ebiztie！请激活账户后使用。{"\n"}
                  账户激活邮件已发送至{this.props.username}{"\n"}如需重发请点击:
              </Text>
            </CardItem>
            <CardItem bordered>
              <Button block title="Go to activation page" onPress={this.handleResendActivationEmail}><Text>点击重发</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    username: state.username,
});

export default connect(mapStateToProps)(ActivateUser);
