import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body } from 'native-base';

import styles from './styles';

const Hao = require('../../../img/home/Hao.png');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class PartnerDetail extends Component { // eslint-disable-line
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
  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        {/* <Header style={styles.header} >
          <Left>
            <Icon name="ios-arrow-back" style={{ color: 'white' }} />
          </Left>
        </Header> */}
        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
                <Image source={level} style={{marginRight:20}}/>
                <Icon name="ios-person" style={{ color: 'green' }} />
                <Icon name="ios-people-outline" style={{ color: 'black' }} />
              <Right>
                  <Text>Hao</Text>
                  <Text note>USA</Text>
              </Right>
            </CardItem>

            <CardItem>
              <Body>
                <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={Hao} />
                <Text>
                  Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。
                  Ebiztie.com 的使命是为创业者提供创业帮助以及支持全球中小企业的发展壮大，并寻求在全球最大的两个经济体美国和中国之间建立紧密联系以帮助两国中小企业的发展和壮大。
              </Text>
              </Body>
            </CardItem>

            <CardItem>
             <View style={styles.btns}>
               <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>简介</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>问卷</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>商洽</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>项目</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>活动</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>图片／影像</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
                <Card>
                  <CardItem style={{ borderBottomWidth: 1, borderColor: '#d3d3d3'}}>
                        <Text style={styles.btns_text}>短信</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                  </CardItem>
                </Card>
              </View>
            </CardItem>

            <CardItem style={{marginLeft:-20}}>
                <Button transparent>
                  <Icon name="md-person-add" />
                </Button>
                <Button transparent>
                  <Icon name="ios-chatboxes" />
                </Button>
                <Button transparent>
                  <Icon name="ios-thumbs-up" />
                  <Text>1,926</Text>
                </Button>
                <Button transparent>
                  <Icon name="md-arrow-forward" />
                </Button>
                <Button transparent>
                  <Icon name="md-create" />
                </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default PartnerDetail
