import React, { Component } from 'react';
import { Container, Content, Header, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Spinner, Body } from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

import styles from './styles';

import { Home } from '../../AppNavigator';


const deviceHeight = Dimensions.get('window').height;

class business extends Component {
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
    render() {
        const business = this.props.morePartnerDetailInfo.businesses
        if(business.length>0){
            return(
                <Content padder style={{marginBottom:40}}>
            {business.map((item, index) =>

            (<Card key={index}>
            <CardItem header style={{backgroundColor:'#f5f5f5'}}>
            <Text>{item.name}</Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
            <Body>
            <Text>{I18n.t('businessType')}：{item.type}</Text>
            <Text>{I18n.t('partner_business_location')}：{item.location_full}</Text>
            <Text>{I18n.t('partner_business_time')}：{item.createYear}</Text>
            <Text>{I18n.t('partner_business_sector')}：{item.industry}</Text>
            <Text>{I18n.t('employeeNumber')}：{item.employeeRange}</Text>
            <Text>{I18n.t('partner_business_position')}：{item.myPosition}</Text>
            <Text>{I18n.t('partner_business_tech')}：{item.technology}</Text>
            <Text>{I18n.t('partner_business_interest')}：{item.investIndustry}</Text>
            <Text>{I18n.t('partner_business_application')}：{item.acceptApplication}</Text>
            <Text>{I18n.t('partner_business_due')}：{item.applicationDueDt}</Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <Text>{I18n.t('partner_business_introduction')}：{item.summary}</Text>
            <Text>{I18n.t('partner_business_more')}：{item.detail}</Text>
            <Text>{I18n.t('partner_business_others')}：{item.service}</Text>
            {/*<Text>我的孵化器：{item.myIncubator}</Text>
            <Text>孵化器名称：{item.myIncubatorName}</Text>
            <Text>伙伴关系：{item.partnerWithSME}</Text>
            <Text>访问原因：{item.smeVisitPurpose}</Text>
            <Text>投资史：{item.investHistory}</Text>*/}


            </Body>
            </CardItem>
            </Card>))}
            </Content>
        )
        }else{
            return (<Content padder><Text>{I18n.t('partner_noContents')}</Text></Content>);
        }
    }
}

const mapStateToProps = (state) => ({
    morePartnerDetailInfo: state.morePartnerDetailInfo,
});

export default connect(mapStateToProps)(business);