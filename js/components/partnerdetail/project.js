import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body,Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

import styles from './styles';


const proimg = require('../../../img/web-cover1.jpg');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ProjectDetail extends Component { // eslint-disable-line
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
  render() { // eslint-disable-line
      const projectIconURL =  this.props.projectDetailInfo.basicInfo.icon;
      const projectDetailInfo = this.props.projectDetailInfo;
      console.log("key is" + I18n.t('investor_investor1')+ 'test');
      console.log("value is " + projectDetailInfo.investor1);
      let partnerWithSME
      if (projectDetailInfo.partnerWithSME === true){
          partnerWithSME = 'YES'
      }else{
          partnerWithSME = 'NO'
      }
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
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>{I18n.t('project_profile_title')}</Text>
      </CardItem>
      <CardItem style={{borderBottomWidth:1, borderColor:'#eaeff2'}}>
    <Body>
      <Text>{I18n.t('project_profile_post')}：{projectDetailInfo.createdBy}</Text>
      <Text>{I18n.t('project_profile_name')}：{projectDetailInfo.name}</Text>
      <Text>{I18n.t('location')}：{projectDetailInfo.location_full}</Text>
      <Text>{I18n.t('businessDirection')}：{projectDetailInfo.basicInfo.field}</Text>
      <Text>{I18n.t('milestone')}：{projectDetailInfo.project_phase}</Text>
      <Text>{I18n.t('project_profile_keywords')}：{projectDetailInfo.techTag}</Text>
      <Text>{I18n.t('project_profile_partner')}：{partnerWithSME}</Text>
      <Text>{I18n.t('project_profile_time')}：{projectDetailInfo.prepareTime}</Text>
      <Text>{I18n.t('project_profile_link')}：{projectDetailInfo.website_link}</Text>

      </Body>
      </CardItem>
      </Card>

    <Card>
    <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>{I18n.t('project_profile_description')}</Text>
    </CardItem>
    <CardItem>
    <Body>
    <Text>{projectDetailInfo.project_description}</Text>
    </Body>
    </CardItem>
    </Card>

    <Card>
    <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>{I18n.t('project_profile_advantages')}</Text>
    </CardItem>
    <CardItem>
    <Body>
    <Text>{projectDetailInfo.advantage}</Text>
    </Body>
    </CardItem>
    </Card>

    <Card>
    <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>{I18n.t('project_profile_done')}</Text>
    </CardItem>
    <CardItem>
    <Body>
    <Text>{projectDetailInfo.project_finished}</Text>
    </Body>
    </CardItem>
    </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('project_funding_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('project_funding_ways')}：{projectDetailInfo.project_funding}</Text>
      <Text>{I18n.t('project_funding_round')}：{projectDetailInfo.currentFundingAmount}</Text>
      <Text style={{marginTop:10}}>{I18n.t('project_funding_closed')}：</Text>
      <Text>{I18n.t('project_funding_ventureCapital')}：{projectDetailInfo.ventureCapital_fund}</Text>
      <Text>{I18n.t('project_funding_crowdFund')}：{projectDetailInfo.crowd_fund}</Text>
      <Text>{I18n.t('project_funding_angel')}：{projectDetailInfo.angelPrivate_fund}</Text>
      <Text>{I18n.t('project_funding_selfRaised')}：{projectDetailInfo.selfRaised_fund}</Text>
      <Text>{I18n.t('funding_1round')}：{projectDetailInfo.funding_firstphase}</Text>
      <Text>{I18n.t('funding_2round')}：{projectDetailInfo.funding_secondphase}</Text>
      <Text>{I18n.t('funding_3round')}：{projectDetailInfo.funding_thirdphase}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('project_team_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('project_team_teamSize')}：{projectDetailInfo.teamNumber}</Text>
      <Text>{I18n.t('project_team_founders')}：{projectDetailInfo.founder1}</Text>
      <Text>{I18n.t('project_team_partnerTypes')}：{projectDetailInfo.project_positions}</Text>
      <Text>{I18n.t('project_team_responsibilities')}：{projectDetailInfo.partner_responsibility}</Text>
      <Text>{I18n.t('project_team_qualities')}：{projectDetailInfo.partner_quality}</Text>
      <Text>{I18n.t('commitment')}：{projectDetailInfo.partner_compensationoption}</Text>
      </Body>
      </CardItem>
      </Card>


    <Card>
    <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>{I18n.t('project_incubator_title')}</Text>
    </CardItem>
    <CardItem>
    <Body>
    <Text>{I18n.t('project_incubator_status')}：{projectDetailInfo.myIncubator}</Text>
    <Text>{I18n.t('project_incubator_name')}：{projectDetailInfo.myIncubatorName}</Text>
    </Body>
    </CardItem>
    </Card>



      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>{I18n.t('project_investor_title')},{I18n.t('project_boardMembers_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('project_investor_title')}</Text>
      <Text>{I18n.t('investor_investor1')}：{projectDetailInfo.investor1}</Text>
      <Text>{I18n.t('investor_investor2')}：{projectDetailInfo.investor2}</Text>
      <Text>{I18n.t('investor_investor3')}：{projectDetailInfo.investor3}</Text>
      <Text>{I18n.t('investor_investor4')}：{projectDetailInfo.investor4}</Text>
      <Text style={{marginTop:10}}>{I18n.t('project_boardMembers_title')}：</Text>
      <Text>{I18n.t('boardMembers_member1')}：{projectDetailInfo.broadMember1}</Text>
      <Text>{I18n.t('boardMembers_member2')}：{projectDetailInfo.broadMember2}</Text>
      <Text>{I18n.t('boardMembers_member3')}：{projectDetailInfo.broadMember3}</Text>
      <Text>{I18n.t('boardMembers_member4')}：{projectDetailInfo.broadMember4}</Text>
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
    projectDetailInfo: state.projectDetailInfo,
});
export default connect(mapStateToProps)(ProjectDetail);
