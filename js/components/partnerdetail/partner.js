import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body } from 'native-base';
import { connect } from 'react-redux';
import { getMorePartnerInfo, getAllBusiness, getAllProject } from '../../actions';

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
    constructor(props) {
        super(props);
        this.handleAllBusiness =  this.handleAllBusiness.bind(this);
        this.handleAllProject =  this.handleAllProject.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(getMorePartnerInfo(this.props.partnerDetailInfo.basicInfo.user_id));
    }
    handleAllBusiness(){
        this.props.dispatch(getAllBusiness());
    }
    handleAllProject(){
        this.props.dispatch(getAllProject());
    }

  render() { // eslint-disable-line
      const partnerIconURL =  this.props.partnerDetailInfo.basicInfo.icon;
      const partnerDemo = this.props.partnerDetailInfo.basicInfo.summaryDemo;
      const nickname = this.props.partnerDetailInfo.basicInfo.nickname;
      const user_id = this.props.partnerDetailInfo.basicInfo.user_id;
      const survey = this.props.morePartnerDetailInfo.survey || {};
      const business = (this.props.morePartnerDetailInfo &&  this.props.morePartnerDetailInfo.businesses && this.props.morePartnerDetailInfo.businesses[0]) || {}
      const project = (this.props.morePartnerDetailInfo &&  this.props.morePartnerDetailInfo.project && this.props.morePartnerDetailInfo.project[0]) || {}
    return (
      <Container style={styles.container}>
        <Content padder>
             <Card>
              <CardItem>
              <Body>
              <Image style={{ alignSelf: 'center', height: 150, resizeMode: 'cover', width: deviceWidth / 1.18, marginVertical: 5 }} source={{uri: partnerIconURL}} />
              </Body>
              </CardItem>
              <CardItem>
              <Image source={level} style={{marginRight:10}}/>
              <Icon name="ios-person" style={{ color: 'green', marginRight: -10}} />

              <Button iconLeft transparent style={{marginRight: -10}}>
              <Icon active name="ios-checkmark-circle" />
              <Text>1900</Text>
              </Button>

              <Button iconLeft transparent style={{marginLeft: -10}}>
              <Icon active name="ios-checkmark-circle-outline" />
              <Text>5000</Text>
              </Button>

              <Button style={{backgroundColor:'#218BC8'}}>
                  <Text>加关注</Text>
              </Button>
              </CardItem>
              </Card>

              <Card>
                  <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                  <Text>概况</Text>
                  </CardItem>
                  <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
                  <Body>
                  <Text>昵称：<Text note>{nickname}</Text></Text>
                  <Text>本人：<Text note>{partnerDemo}</Text></Text>
                  <Text>工作经验：<Text note>{this.props.partnerDetailInfo.experience}</Text></Text>
                  <Text>专长：<Text note>{this.props.partnerDetailInfo.occupation}</Text></Text>
                  <Text>关心领域：<Text note></Text></Text>
                  </Body>
                  </CardItem>
                  <CardItem>
                  <Body>
                  <Text>标签：<Text note>{this.props.partnerDetailInfo.tags}</Text></Text>
                  <Text>现状态：<Text note>{this.props.partnerDetailInfo.currentRole}</Text></Text>
                  <Text>原因：<Text note>{this.props.partnerDetailInfo.visitReason}</Text></Text>
                  <Text>公司：<Text note>{this.props.partnerDetailInfo.company}</Text></Text>
                  <Text>学校：<Text note>{this.props.partnerDetailInfo.schools}</Text></Text>
                  <Text>雇主：<Text note>{this.props.partnerDetailInfo.employers}</Text></Text>
                  <Text>行业：<Text note>{this.props.partnerDetailInfo.industry}</Text></Text>
                  <Text>职位：<Text note>{this.props.partnerDetailInfo.occupation}</Text></Text>
                  <Text>工作经验：<Text note>{this.props.partnerDetailInfo.experience}</Text></Text>
                  <Text>技能：<Text note>{this.props.partnerDetailInfo.skills}</Text></Text>
                  <Text>特长：<Text note>{this.props.partnerDetailInfo.specialty}</Text></Text>
                  <Text>证书：<Text note>{this.props.partnerDetailInfo.certificate}</Text></Text>
                  <Text>爱好：<Text note>{this.props.partnerDetailInfo.hobbies}</Text></Text>
                  </Body>
                  </CardItem>
              </Card>

              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
              <Text>简介</Text>
              </CardItem>
              <CardItem>
              <Body>
              <Text>{this.props.partnerDetailInfo.basicInfo.summaryBio}</Text>
              </Body>
              </CardItem>
              </Card>

              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>问卷调查</Text>
              </CardItem>
              <CardItem>
                <Body>
              <Text>情况：<Text note>{survey.currentSituation}</Text></Text>
              <Text>定位：<Text note>{survey.myOrientation}</Text></Text>
              <Text>企业经验：<Text note>{survey.entrepreneurExperience}</Text></Text>
              <Text>空余时间：<Text note>{survey.availableTime}</Text></Text>
              <Text>自筹资金：<Text note>{survey.selfFunding}</Text></Text>
              <Text>方向：<Text note>{survey.direction}</Text></Text>
              <Text>寻求地点：<Text note>{survey.desiredLocation}</Text></Text>
              <Text>内涵：<Text note>{survey.innerQualities}</Text></Text>
              <Text>确定投资：<Text note>{survey.establishedVentures}</Text></Text>
              <Text>星级：<Text note>{survey.hasStarted}</Text></Text>
              <Text>企业方式：<Text note>{survey.cooperationMethod}</Text></Text>
              <Text>孵化器：<Text note>{survey.incubatorInfo}</Text></Text>
              <Text>奖励方式：<Text note>{survey.compensationOption}</Text></Text>
              </Body>
              </CardItem>
              </Card>

              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>商洽</Text>
              </CardItem>
              <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
                <Body>
              <Text>名称：<Text note>{business.name}</Text></Text>
              <Text>类别：<Text note>{business.type}</Text></Text>
              <Text>地点：<Text note>{business.location_full}</Text></Text>
              <Text>创立时间：<Text note>{business.createYear}</Text></Text>
              <Text>行业：<Text note>{business.industry}</Text></Text>
              <Text>员工数：<Text note>{business.employeeRange}</Text></Text>
              <Text>我的职位：<Text note>{business.myPosition}</Text></Text>
              <Text>技术：<Text note>{business.technology}</Text></Text>
              <Text>服务：<Text note>{business.service}</Text></Text>
              <Text>投资行业：<Text note>{business.investIndustry}</Text></Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
              <Text>概况：<Text note>{business.summary}</Text></Text>
              <Text>细节：<Text note>{business.detail}</Text></Text>
              <Text>我的孵化器：<Text note>{business.myIncubator}</Text></Text>
              <Text>孵化器名称：<Text note>{business.myIncubatorName}</Text></Text>
              <Text>伙伴关系：<Text note>{business.partnerWithSME}</Text></Text>
              <Text>访问原因：<Text note>{business.smeVisitPurpose}</Text></Text>
              <Text>投资史：<Text note>{business.investHistory}</Text></Text>
              <Text>接受申请：<Text note>{business.acceptApplication}</Text></Text>
              <Text>申请截止：<Text note>{business.applicationDueDt}</Text></Text>
              </Body>
              </CardItem>
              <CardItem footer style={{backgroundColor:'#f5f5f5'}}>
              <Button onPress={this.handleAllBusiness}>
              <Text>点击查看全部</Text>
              </Button>
              </CardItem>
              </Card>
             <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>项目</Text>
              </CardItem>
              <CardItem>
                <Body>
              <Text>名称：<Text note>{project.name}</Text></Text>
              <Text>领域：<Text note>{project.project_fields}</Text></Text>
              <Text>地区：<Text note>{project.location_full}</Text></Text>
              <Text>已完成：<Text note>{project.project_finished}</Text></Text>
              <Text>投资概况：<Text note>{project.project_funding}</Text></Text>
              <Text>第一轮投资：<Text note>{project.funding_firstphase}</Text></Text>
              <Text>第二轮投资：<Text note>{project.funding_secondphase}</Text></Text>
              <Text>第三轮投资：<Text note>{project.funding_thirdphase}</Text></Text>
              <Text>项目团队：<Text note>{project.project_team}</Text></Text>
              <Text>项目定位：<Text note>{project.project_positions}</Text></Text>
              <Text>项目合作：<Text note>{project.partner_cooperationoption}</Text></Text>
              <Text>补偿条件：<Text note>{project.partner_compensationoption}</Text></Text>
              <Text>合伙人评估：<Text note>{project.partner_quality}</Text></Text>
              <Text>责任：<Text note>{project.partner_responsibility}</Text></Text>
              <Text>项目描述：<Text note>{project.project_description}</Text></Text>

              </Body>
              </CardItem>
              <CardItem footer style={{backgroundColor:'#f5f5f5'}}>
              <Button onPress={this.handleAllProject}>
              <Text>点击查看全部</Text>
              </Button>
              </CardItem>
              </Card>


              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>故事</Text>
              </CardItem>
              <CardItem>
                <Body>
              <Text>我的故事</Text>
              </Body>
              </CardItem>
              </Card>

          <Card style={{marginLeft:-20, marginBottom:30}}>
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
    partnerDetailInfo: state.partnerDetailInfo,
    morePartnerDetailInfo: state.morePartnerDetailInfo,
});

export default connect(mapStateToProps)(PartnerDetail);