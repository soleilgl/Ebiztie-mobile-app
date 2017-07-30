import React, { Component } from 'react';
import { Container, Content, Header, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Spinner, Body } from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';


const deviceHeight = Dimensions.get('window').height;

class business extends Component {
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
            <Text>类别：<Text note>{item.type}</Text></Text>
            <Text>地点：<Text note>{item.location_full}</Text></Text>
            <Text>创立时间：<Text note>{item.createYear}</Text></Text>
            <Text>行业：<Text note>{item.industry}</Text></Text>
            <Text>员工数：<Text note>{item.employeeRange}</Text></Text>
            <Text>我的职位：<Text note>{item.myPosition}</Text></Text>
            <Text>技术：<Text note>{item.technology}</Text></Text>
            <Text>服务：<Text note>{item.service}</Text></Text>
            <Text>投资行业：<Text note>{item.investIndustry}</Text></Text>
            </Body>
            </CardItem>
            <CardItem>
            <Body>
            <Text>概况：<Text note>{item.summary}</Text></Text>
            <Text>细节：<Text note>{item.detail}</Text></Text>
            <Text>我的孵化器：<Text note>{item.myIncubator}</Text></Text>
            <Text>孵化器名称：<Text note>{item.myIncubatorName}</Text></Text>
            <Text>伙伴关系：<Text note>{item.partnerWithSME}</Text></Text>
            <Text>访问原因：<Text note>{item.smeVisitPurpose}</Text></Text>
            <Text>投资史：<Text note>{item.investHistory}</Text></Text>
            <Text>接受申请：<Text note>{item.acceptApplication}</Text></Text>
            <Text>申请截止：<Text note>{item.applicationDueDt}</Text></Text>
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

export default connect(mapStateToProps)(business);