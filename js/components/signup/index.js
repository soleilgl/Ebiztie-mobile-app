import React, { Component } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { Container, Left, Right, Header, Content, Button, Icon, List, ListItem, InputGroup, Input, Picker, Text, Thumbnail, Textarea } from 'native-base';

import styles from './styles';

const Item = Picker.Item;
const userphoto = require('../../../img/user-pic.png');
const logo = require('../../../img/Ebiztie.jpg');

class Signup extends Component {
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
          <TouchableOpacity>
            <Thumbnail size={80} source={userphoto} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
          </TouchableOpacity>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="md-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel label="full name" placeholder="姓名" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="md-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel label="nickname" placeholder="昵称" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
                <Input placeholder="邮箱" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="密码" secureTextEntry />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="确认密码" secureTextEntry />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-globe-outline" style={{ color: '#0A69FE' }} />
                <Input inlineLabel label="region" placeholder="国家／地区" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                <Text>性别</Text>
              </Left>
              <Content>
                <Picker iosHeader="Select one" mode="dropdown">
                  <Item label="男" value="key0" />
                  <Item label="女" value="key1" />
                </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
              <Left>
                <Text>创业状态</Text>
              </Left>
              <Content>
                <Picker iosHeader="Select one" mode="dropdown">
                  <Item label="创业中" value="key0" />
                  <Item label="创业中" value="key1" />
                </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
              <Left>
                <Text>创业状态</Text>
              </Left>
              <Content>
                <Picker iosHeader="Select one" mode="dropdown">
                  <Item label="寻求合作伙伴" value="key0" />
                  <Item label="寻求合作项目" value="key1" />
                </Picker>
              </Content>
              <Right />
            </ListItem>
            <Content padder>
              <Textarea rowSpan={5} bordered placeholder="自我简介" />
            </Content>
          </List>
          <Button style={styles.submitbtn}>
            <Text style={{ fontSize: 15, marginLeft: 70 }}>提交</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


export default Signup;
