import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body } from 'native-base';
import { connect } from 'react-redux';
import { getMorePartnerInfo, getAllBusiness, getAllProject } from '../../actions';
import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

import styles from './styles';

const Hao = require('../../../img/home/Hao.png');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class PartnerDetail extends Component { // eslint-disable-line
  static navigationOptions = {
    headerMode: 'none',
    title: '',
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
              <Image source={level} style={{marginRight:10, width:40, height:15}}/>
              <Icon name="ios-person" style={{ color: 'green', marginRight: -10}} />

              <Button small iconLeft transparent style={{marginRight: -10}}>
              <Icon active name="ios-checkmark-circle" />
              <Text>1900</Text>
              </Button>

              <Button small iconLeft transparent style={{marginLeft: -10}}>
              <Icon active name="ios-checkmark-circle-outline" />
              <Text>5000</Text>
              </Button>

              <Button small style={{backgroundColor:'#218BC8'}}>
                  <Text>{I18n.t('partner_follow')}</Text>
              </Button>
              </CardItem>
              </Card>

              <Card>
                  <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                  <Text>{I18n.t('partner_profile_title')}</Text>
                  </CardItem>
                  <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
                  <Body>
                  <Text>{I18n.t('nickname')}：{nickname}</Text>
                  <Text>{I18n.t('partner_profile_about')}：{partnerDemo}</Text>
                  <Text>{I18n.t('workingExperience')}：{this.props.partnerDetailInfo.experience}</Text>
                  <Text>{I18n.t('occupation')}：{this.props.partnerDetailInfo.occupation}</Text>
                  <Text>{I18n.t('businessDirection')}：{survey.direction}</Text>
                  </Body>
                  </CardItem>
                  <CardItem>
                  <Body>
                  <Text>{I18n.t('visitReason')}：{this.props.partnerDetailInfo.visitReason}</Text>
                  <Text>{I18n.t('currentRole')}：{this.props.partnerDetailInfo.currentRole}</Text>
                  <Text>{I18n.t('occupation')}：{this.props.partnerDetailInfo.occupation}</Text>
                  <Text>{I18n.t('companyName')}：{this.props.partnerDetailInfo.company}</Text>
                  <Text>{I18n.t('industry')}：{this.props.partnerDetailInfo.industry}</Text>
                  <Text>{I18n.t('workingExperience')}：{this.props.partnerDetailInfo.experience}</Text>
                  <Text>{I18n.t('employers')}：{this.props.partnerDetailInfo.employers}</Text>
                  <Text>{I18n.t('partner_profile_education')}：{this.props.partnerDetailInfo.schools}</Text>
                  <Text>{I18n.t('tags')}：{this.props.partnerDetailInfo.tags}</Text>
                  <Text>{I18n.t('partner_profile_certificates')}：{this.props.partnerDetailInfo.certificate}</Text>
                  <Text>{I18n.t('hobbies')}：{this.props.partnerDetailInfo.hobbies}</Text>
                  <Text>{I18n.t('friendDescribeMe')}：{this.props.partnerDetailInfo.characters}</Text>
                  <Text>{I18n.t('specialities')}：{this.props.partnerDetailInfo.specialty}</Text>
                  <Text>{I18n.t('skills')}：{this.props.partnerDetailInfo.skill}</Text>
                  </Body>
                  </CardItem>
              </Card>

              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
              <Text>{I18n.t('partner_introduction_title')}</Text>
              </CardItem>
              <CardItem>
              <Body>
              <Text>{this.props.partnerDetailInfo.basicInfo.summaryBio}</Text>
              </Body>
              </CardItem>
              </Card>

              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>{I18n.t('partner_survey_title')}</Text>
              </CardItem>
              <CardItem>
                <Body>
              <Text>{I18n.t('currentSituation')}：{survey.currentSituation}</Text>
              <Text>{I18n.t('liketo')}：{survey.myOrientation}</Text>
              <Text>{I18n.t('partner_survey_commit')}：{survey.cooperationMethod}</Text>
              <Text>{I18n.t('entrepreneurExperience')}：{survey.entrepreneurExperience}</Text>
              <Text>{I18n.t('availableTime')}：{survey.availableTime}</Text>
              <Text>{I18n.t('incubationStatus')}：{survey.incubatorInfo}</Text>
              <Text>{I18n.t('partner_survey_funding')}：{survey.selfFunding}</Text>
              <Text>{I18n.t('businessDirection')}：{survey.direction}</Text>
              <Text>{I18n.t('partner_survey_location')}：{survey.desiredLocation}</Text>
              <Text>{I18n.t('partner_survey_lookfor')}：{survey.innerQualities}</Text>
              {/*<Text>确定投资：{survey.establishedVentures}</Text>
              <Text>星级：{survey.hasStarted}</Text>
              <Text>奖励方式：{survey.compensationOption}</Text>*/}
              </Body>
              </CardItem>
              </Card>

              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>{I18n.t('partner_business_title')}</Text>
              </CardItem>
              <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
                <Body>
              <Text>{I18n.t('partner_business_name')}：{business.name}</Text>
              <Text>{I18n.t('businessType')}：{business.type}</Text>
              <Text>{I18n.t('partner_business_location')}：{business.location_full}</Text>
              <Text>{I18n.t('partner_business_time')}：{business.createYear}</Text>
              <Text>{I18n.t('partner_business_sector')}：{business.industry}</Text>
              <Text>{I18n.t('employeeNumber')}：{business.employeeRange}</Text>
              <Text>{I18n.t('partner_business_position')}：{business.myPosition}</Text>
              <Text>{I18n.t('partner_business_tech')}：{business.technology}</Text>
              <Text>{I18n.t('partner_business_interest')}：{business.investIndustry}</Text>
              <Text>{I18n.t('partner_business_application')}：{business.acceptApplication}</Text>
              <Text>{I18n.t('partner_business_due')}：{business.applicationDueDt}</Text>
              </Body>
              </CardItem>
              <CardItem>
              <Body>
              <Text>{I18n.t('partner_business_introduction')}：{business.summary}</Text>
              <Text>{I18n.t('partner_business_more')}：{business.detail}</Text>
              <Text>{I18n.t('partner_business_others')}：{business.service}</Text>
              {/*<Text>我的孵化器：{business.myIncubator}</Text>
              <Text>孵化器名称：{business.myIncubatorName}</Text>
              <Text>伙伴关系：{business.partnerWithSME}</Text>
              <Text>访问原因：{business.smeVisitPurpose}</Text>
              <Text>投资史：{business.investHistory}</Text>*/}
              </Body>
              </CardItem>
              <CardItem footer style={{backgroundColor:'#f5f5f5'}}>
              <Button onPress={this.handleAllBusiness} style={{backgroundColor:'#218bc8'}}>
              <Text>{I18n.t('partner_business_moreBusiness')}</Text>
              </Button>
              </CardItem>
              </Card>
             <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>{I18n.t('partner_project_title')}</Text>
              </CardItem>
              <CardItem>
                <Body>
              <Text>{I18n.t('partner_project_name')}：{project.name}</Text>
              <Text>{I18n.t('partner_project_fields')}：{project.project_fields}</Text>
              <Text>{I18n.t('partner_project_location')}：{project.location_full}</Text>
              <Text>{I18n.t('milestone')}：{project.project_phase}</Text>
              <Text>{I18n.t('partner_project_done')}：{project.project_finished}</Text>
              <Text>{I18n.t('partner_project_funding')}：{project.project_funding}</Text>
              <Text>{I18n.t('partner_project_funding1')}：{project.funding_firstphase}</Text>
              <Text>{I18n.t('partner_project_funding2')}：{project.funding_secondphase}</Text>
              <Text>{I18n.t('partner_project_funding3')}：{project.funding_thirdphase}</Text>
              <Text>{I18n.t('partner_project_aboutTeam')}：{project.project_team}</Text>
              <Text>{I18n.t('partner_project_teamsize')}：{project.teamNumber}</Text>
              <Text>{I18n.t('partner_project_lookingfor')}：{project.project_positions}</Text>
              <Text>{I18n.t('partner_project_quality')}：{project.partner_quality}</Text>
              <Text>{I18n.t('partner_project_responsibility')}：{project.partner_responsibility}</Text>
              <Text>{I18n.t('commitment')}：{project.partner_cooperationoption}</Text>
              <Text>{I18n.t('partner_project_description')}：{project.project_description}</Text>
              </Body>
              </CardItem>
              <CardItem footer style={{backgroundColor:'#f5f5f5'}}>
              <Button onPress={this.handleAllProject} style={{backgroundColor:'#218bc8'}}>
              <Text>{I18n.t('partner_project_moreProject')}</Text>
              </Button>
              </CardItem>
              </Card>


              <Card>
              <CardItem header style={{backgroundColor:'#f5f5f5'}}>
                <Text>{I18n.t('partner_story_title')}</Text>
              </CardItem>
              <CardItem>
                <Body>
              <Text>我的故事</Text>
              </Body>
              </CardItem>
              </Card>

            <View style={styles.iconContainer}>
                <Button transparent>
                  <Icon name="md-person-add" />
                </Button>
                <Button transparent>
                  <Icon name="ios-chatboxes" />
                </Button>
                {/*<Button transparent>
                  <Icon name="ios-thumbs-up" />
                  <Text>1,926</Text>
                </Button>*/}
                <Button transparent>
                  <Icon name="md-arrow-forward" />
                </Button>
                <Button transparent>
                  <Icon name="md-create" />
                </Button>
              </View>
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