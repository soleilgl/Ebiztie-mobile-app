import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';


const bizimg = require('../../../img/discoverlogo.jpg');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class BusinessDetail extends Component { // eslint-disable-line
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
      const businessIconURL =  this.props.businessDetailInfo.basicInfo.icon;
      const businessDetailInfo = this.props.businessDetailInfo;
    return (
      <Container style={styles.container}>
      <Content padder>

      {/*<Card>
      <CardItem>
      <Body>
      <Thumbnail big style={{ alignSelf: 'center'}} source={{uri: businessIconURL}} />
      <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={{uri: businessIconURL}} />
      </Body>
      </CardItem>
      <CardItem>
      <Button iconLeft transparent style={{marginLeft: -10}}>
      <Icon active name="ios-checkmark-circle-outline" />
      <Text>5000</Text>
      </Button>
          <Button>
      <Text style={{fontSize:8}}>加关注</Text>
      </Button>
      </CardItem>
      </Card>*/}

      <Card>
      <CardItem>
      <Thumbnail big style={{ marginLeft: 140}} source={{uri: businessIconURL}} />
      </CardItem>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>概况</Text>
      </CardItem>
      <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
      <Body>
      <Text>名称：<Text note>{businessDetailInfo.name}</Text></Text>
      <Text>类型：<Text note>{businessDetailInfo.basicInfo.type}</Text></Text>
      <Text>地点：<Text note>{businessDetailInfo.basicInfo.location}</Text></Text>
      <Text>创建年限：<Text note>{businessDetailInfo.createYear}</Text></Text>
      <Text>领域：<Text note>{businessDetailInfo.industry}</Text></Text>
      <Text>员工数：<Text note>{businessDetailInfo.employeeRange}</Text></Text>
      <Text>年收入：<Text note>{businessDetailInfo.annualIncome}</Text></Text>
      <Text>会员现状：<Text note>{businessDetailInfo.myPosition}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>简介</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{businessDetailInfo.summary}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>细节</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>细节：<Text note>{businessDetailInfo.detail}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>产品，细节及程序</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>技术：<Text note>{businessDetailInfo.technology}</Text></Text>
      <Text>服务：<Text note>{businessDetailInfo.service}</Text></Text>
      </Body>
      </CardItem>
      </Card>


      <Card style={{marginBottom:30}}>
      <CardItem>
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
const mapStateToProps = (state) => ({
    businessDetailInfo: state.businessDetailInfo,
});

export default connect(mapStateToProps)(BusinessDetail);
