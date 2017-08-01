import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body,Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import styles from './styles';


const proimg = require('../../../img/web-cover1.jpg');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ProjectDetail extends Component { // eslint-disable-line
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
      const projectIconURL =  this.props.projectDetailInfo.basicInfo.icon;
      const projectDetailInfo = this.props.projectDetailInfo;
    return (
      <Container style={styles.container}>
        {/* <Header style={styles.header} >
          <Left>
            <Icon name="ios-arrow-back" style={{ color: 'white' }} />
          </Left>
        </Header> */}
        <Content padder>
      <Card>
      <CardItem>
      <Thumbnail big style={{ marginLeft: 140}} source={{uri: projectIconURL}} />
    </CardItem>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
    <Text>概况</Text>
      </CardItem>
      <CardItem style={{borderBottomWidth:1, borderColor:'#eaeff2'}}>
    <Body>
      <Text>创建人：<Text note>{projectDetailInfo.createdBy}</Text></Text>
      <Text>名称：<Text note>{projectDetailInfo.name}</Text></Text>
      <Text>链接：<Text note>{projectDetailInfo.website_link}</Text></Text>
      <Text>地点：<Text note>{projectDetailInfo.location_full}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
    <Text>简介</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{projectDetailInfo.project_description}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
    <Text>项目总结</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>领域：<Text note>{projectDetailInfo.basicInfo.field}</Text></Text>
      <Text>里程碑：<Text note>{projectDetailInfo.project_team}</Text></Text>
      <Text>Technology Tags：<Text note>{projectDetailInfo.project_team}</Text></Text>
      <Text>Time Invested in the Project：<Text note>{projectDetailInfo.prepareTime}</Text></Text>
      <Text>What Have You Done For The Project So Far：<Text note>{projectDetailInfo.partner_cooperationoption}</Text></Text>
      <Text>What Kind of Advantage Does the Project Have：<Text note>{projectDetailInfo.advantage}</Text></Text>
      <Text>Are You Seeking to Partner With a SME For Your Innovation：<Text note>{projectDetailInfo.partnerWithSME}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
    <Text>项目资金</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>You are Raising Funds via：<Text note>{projectDetailInfo.project_funding}</Text></Text>
      <Text>Raising as Equity in Current Round：<Text note>{projectDetailInfo.currentFundingAmount}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
  <Text>已拿到投资（$）</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>Self-Raised fund：<Text note>{projectDetailInfo.selfRaised_fund}</Text></Text>
      <Text>Crowdfunding：<Text note>{projectDetailInfo.crowd_fund}</Text></Text>
      <Text>Angle/Private Equity：<Text note>{projectDetailInfo.angelPrivate_fund}</Text></Text>
      <Text>Venture Capital：<Text note>{projectDetailInfo.ventureCapital_fund}</Text></Text>
      <Text>First Round：<Text note>{projectDetailInfo.funding_firstphase}</Text></Text>
      <Text>Second Round：<Text note>{projectDetailInfo.funding_secondphase}</Text></Text>
      <Text>Third Round：<Text note>{projectDetailInfo.funding_thirdphase}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
  <Text>项目团队</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>团队规模：<Text note>{projectDetailInfo.teamNumber}</Text></Text>
      <Text>关于团队：<Text note>{projectDetailInfo.aboutTeam}</Text></Text>
      <Text>创始人 1：<Text note>{projectDetailInfo.founder1}</Text></Text>
      <Text>创始人 2：<Text note>{projectDetailInfo.founder2}</Text></Text>
      <Text>创始人 3：<Text note>{projectDetailInfo.founder3}</Text></Text>
      <Text>创始人 4：<Text note>{projectDetailInfo.founder4}</Text></Text>
      <Text>Types of Talents We Look Forward to Recruit or Partner：<Text note>{projectDetailInfo.project_positions}</Text></Text>
      <Text>Responsibilities of Team Members / Partners：<Text note>{projectDetailInfo.partner_responsibility}</Text></Text>
      <Text>Expected Vital Qualities of The Team Members / Partners：<Text note>{projectDetailInfo.partner_quality}</Text></Text>
      <Text>Team Member Committment：<Text note>{projectDetailInfo.project_team}</Text></Text>
      <Text>奖励制度：<Text note>{projectDetailInfo.partner_compensationoption}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#eaeff2'}}>
    <Text>孵化器／投资（$）</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>Incubator Status：<Text note>{projectDetailInfo.myIncubator}</Text></Text>
      <Text>Name of Incubator：<Text note>{projectDetailInfo.myIncubatorName}</Text></Text>
      <Text>投资人：</Text>
      <Text>投资人1：<Text note>{projectDetailInfo.investor1}</Text></Text>
      <Text>投资人2：<Text note>{projectDetailInfo.investor2}</Text></Text>
      <Text>投资人3：<Text note>{projectDetailInfo.investor3}</Text></Text>
      <Text>投资人4：<Text note>{projectDetailInfo.investor4}</Text></Text>
      <Text>Board member：</Text>
      <Text>Member 1：<Text note>{projectDetailInfo.broadMember1}</Text></Text>
      <Text>Member 2：<Text note>{projectDetailInfo.broadMember2}</Text></Text>
      <Text>Member 3：<Text note>{projectDetailInfo.broadMember3}</Text></Text>
      <Text>Member 4：<Text note>{projectDetailInfo.broadMember4}</Text></Text>
      <Text>Advisors：</Text>
      <Text>Advisor 1：<Text note>{projectDetailInfo.advisor1}</Text></Text>
      <Text>Advisor 2：<Text note>{projectDetailInfo.advisor2}</Text></Text>
      <Text>Advisor 3：<Text note>{projectDetailInfo.advisor3}</Text></Text>
      <Text>Advisor 4：<Text note>{projectDetailInfo.advisor4}</Text></Text>
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
    projectDetailInfo: state.projectDetailInfo,
});
export default connect(mapStateToProps)(ProjectDetail);
