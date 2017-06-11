import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import styles from './styles';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const news_img = require('../../../img/news_img1.jpg');

class HotnewsDetail extends Component {
  static navigationOptions = {
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
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Body>
                <Text>Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={news_img} />
                <Text>
                  Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。
                  Ebiztie.com 的使命是为创业者提供创业帮助以及支持全球中小企业的发展壮大，并寻求在全球最大的两个经济体美国和中国之间建立紧密联系以帮助两国中小企业的发展和壮大。
                  Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。
                  Ebiztie.com 的使命是为创业者提供创业帮助以及支持全球中小企业的发展壮大，并寻求在全球最大的两个经济体美国和中国之间建立紧密联系以帮助两国中小企业的发展和壮大。
                  Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。
                  Ebiztie.com 的使命是为创业者提供创业帮助以及支持全球中小企业的发展壮大，并寻求在全球最大的两个经济体美国和中国之间建立紧密联系以帮助两国中小企业的发展和壮大。
                  Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。
                  Ebiztie.com 的使命是为创业者提供创业帮助以及支持全球中小企业的发展壮大，并寻求在全球最大的两个经济体美国和中国之间建立紧密联系以帮助两国中小企业的发展和壮大。
                  Ebiztie.com 是世界上第一个多语言的连接创业者、中小企业主和投资者的社交媒体平台。
                  Ebiztie.com 的使命是为创业者提供创业帮助以及支持全球中小企业的发展壮大，并寻求在全球最大的两个经济体美国和中国之间建立紧密联系以帮助两国中小企业的发展和壮大。
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default HotnewsDetail;
