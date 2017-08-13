import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Content, Button, Icon, Card, CardItem, Text, Right, Body, Thumbnail } from 'native-base';
import { connect } from 'react-redux';

import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'
import styles from './styles';


const bizimg = require('../../../img/discoverlogo.jpg');
const level = require('../../../img/vip-card.jpg');

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class BusinessDetail extends Component { // eslint-disable-line
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
      <Text>{I18n.t('business_profile_title')}</Text>
      </CardItem>
      <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
      <Body>
      <Text>{I18n.t('business_profile_name')}：{businessDetailInfo.name}</Text>
      <Text>{I18n.t('business_profile_post')}：</Text>
      <Text>{I18n.t('businessType')}：{businessDetailInfo.basicInfo.type}</Text>
      <Text>{I18n.t('business_profile_location')}：{businessDetailInfo.basicInfo.location}</Text>
      <Text>{I18n.t('business_profile_established')}：{businessDetailInfo.createYear}</Text>
      <Text>{I18n.t('business_profile_sector')}：{businessDetailInfo.industry}</Text>
      <Text>{I18n.t('employeeNumber')}：{businessDetailInfo.employeeRange}</Text>
      <Text>{I18n.t('business_profile_income')}：{businessDetailInfo.annualIncome}</Text>
      <Text>{I18n.t('business_profile_position')}：{businessDetailInfo.myPosition}</Text>
      <Text>{I18n.t('business_profile_technology')}：{businessDetailInfo.technology}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('business_summary_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{businessDetailInfo.summary}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('business_details_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{businessDetailInfo.detail}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('business_others_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{businessDetailInfo.service}</Text>
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
    businessDetailInfo: state.businessDetailInfo,
});

export default connect(mapStateToProps)(BusinessDetail);
