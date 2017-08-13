import React, { Component } from 'react';
import { Container, Content, Header, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Spinner, Body } from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

import styles from './styles';

import { Home } from '../../AppNavigator';


const deviceHeight = Dimensions.get('window').height;

class project extends Component {
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
        const project = this.props.morePartnerDetailInfo.project
        if(project.length>0){
            return(
                <Content padder>
            {project.map((item, index) =>

            (<Card key={index}>
             <CardItem header style={{backgroundColor:'#f5f5f5'}}>
             <Text>{item.name}</Text>
            </CardItem>
            <CardItem style={{borderBottomWidth:1, borderColor:'#f5f5f5'}}>
            <Body>
            <Text>{I18n.t('partner_project_fields')}：{item.project_fields}</Text>
            <Text>{I18n.t('partner_project_location')}：{item.location_full}</Text>
            <Text>{I18n.t('milestone')}：{item.project_phase}</Text>
            <Text>{I18n.t('partner_project_done')}：{item.project_finished}</Text>
            <Text>{I18n.t('partner_project_funding')}：{item.project_funding}</Text>
            <Text>{I18n.t('partner_project_funding1')}：{item.funding_firstphase}</Text>
            <Text>{I18n.t('partner_project_funding2')}：{item.funding_secondphase}</Text>
            <Text>{I18n.t('partner_project_funding3')}：{item.funding_thirdphase}</Text>
            <Text>{I18n.t('partner_project_aboutTeam')}：{item.project_team}</Text>
            <Text>{I18n.t('partner_project_teamsize')}：{project.teamNumber}</Text>
            <Text>{I18n.t('partner_project_lookingfor')}：{item.project_positions}</Text>
            <Text>{I18n.t('partner_project_quality')}：{item.partner_quality}</Text>
            <Text>{I18n.t('partner_project_responsibility')}：{item.partner_responsibility}</Text>
            <Text>{I18n.t('commitment')}：{item.partner_cooperationoption}</Text>
            <Text>{I18n.t('partner_project_description')}：{item.project_description}</Text>
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

export default connect(mapStateToProps)(project);