import React, { Component } from 'react';
import { Container, Content, Header, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Spinner, Body } from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';


const deviceHeight = Dimensions.get('window').height;

class project extends Component {
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
            <Text>领域：<Text note>{item.project_fields}</Text></Text>
            <Text>地区：<Text note>{item.location_full}</Text></Text>
            <Text>已完成：<Text note>{item.project_finished}</Text></Text>
            <Text>投资概况：<Text note>{item.project_funding}</Text></Text>
            <Text>第一轮投资：<Text note>{item.funding_firstphase}</Text></Text>
            <Text>第二轮投资：<Text note>{item.funding_secondphase}</Text></Text>
            <Text>第三轮投资：<Text note>{item.funding_thirdphase}</Text></Text>
            <Text>项目团队：<Text note>{item.project_team}</Text></Text>
            <Text>项目定位：<Text note>{item.project_positions}</Text></Text>
            <Text>项目合作：<Text note>{item.partner_cooperationoption}</Text></Text>
            <Text>补偿条件：<Text note>{item.partner_compensationoption}</Text></Text>
            <Text>合伙人评估：<Text note>{item.partner_quality}</Text></Text>
            <Text>责任：<Text note>{item.partner_responsibility}</Text></Text>
            <Text>项目描述：<Text note>{item.project_description}</Text></Text>
            </Body>
            </CardItem>
            </Card>))}
        </Content>
        )
        }else{
            return (<Content padder><Text>暂无内容</Text></Content>);
        }
    }
}

const mapStateToProps = (state) => ({
    morePartnerDetailInfo: state.morePartnerDetailInfo,
});

export default connect(mapStateToProps)(project);