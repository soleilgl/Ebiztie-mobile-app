import React, { Component } from 'react';
import { List, ListItem, Body, Text, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView, Flatlist } from 'react-native';
import { connect } from 'react-redux';
import { getAllPartnersInfo } from '../../actions';

const Hao = require('../../../img/home/Hao.png');

class PartnerPartner extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合伙人',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('PartnerDetail', {});
  };
constructor(props) {
 super(props);
 this.handlePartnerDetail =  this.handlePartnerDetail.bind(this);
 }
componentWillMount() {
 this.props.dispatch(getAllPartnersInfo());
 }
handlePartnerDetail() {
    this.props.dispatch(getPartnerInfo());
}
render(){ // eslint-disable-line
    if(this.props.allPartnersInfo){
        return(
            <ScrollView padder>
        <Card>
        <List>
        {this.props.allPartnersInfo.map((item, index) =>
        (<ListItem key={index}>
            <TouchableOpacity onPress={this.handlePartnerDetail}>
            <Thumbnail square size={80} source={Hao} />
            </TouchableOpacity>
            <Body>
            <Text>{item.nickname}</Text>
        <Text numberOfLines={1} ellipsizeMode ={'tail'}>资料：<Text note>{item.summaryDemo}</Text></Text>
        <Text numberOfLines={3} ellipsizeMode ={'tail'}>简介：<Text note>{item.summaryBio}</Text></Text>
        </Body>
        </ListItem>))}
        </List>
        </Card>
        </ScrollView>
    )
    }else{
        return (<ScrollView padder><Text>loading</Text></ScrollView>);
    }
}
}
const mapStateToProps = (state) => ({
    allPartnersInfo: state.allPartnersInfo,
});

export default connect(mapStateToProps)(PartnerPartner);