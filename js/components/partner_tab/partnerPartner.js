import React, { Component } from 'react';
import { List, ListItem, Body, Text, Thumbnail, Card, Spinner } from 'native-base';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllPartnersInfo, getPartnerInfo } from '../../actions';
import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'


class PartnerPartner extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合伙人',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('PartnerDetail', {});
  };
constructor(props) {
 super(props);
 //this.handlePartnerDetail =  this.handlePartnerDetail.bind(this);
 }
componentWillMount() {
 this.props.dispatch(getAllPartnersInfo());
 }
handlePartnerDetail(item) {
    this.props.dispatch(getPartnerInfo(item));
}
renderItem = ({ item }) => {
    if (item.icon === '') {
        item.icon = 'https://s3-us-west-1.amazonaws.com/userpictureebiztie/defaultuser.jpg';
    }
    return (
        <Card>
        <ListItem>
            <TouchableOpacity onPress={this.handlePartnerDetail.bind(this, item)}>
            <Thumbnail square size={80} source={{uri: item.icon}} />
            </TouchableOpacity>
            <Body>
            <Text>{item.nickname}</Text>
            <Text numberOfLines={1} ellipsizeMode ={'tail'}>{I18n.t('partner_tab_basic')}：{item.summaryDemo}</Text>
            <Text numberOfLines={5} ellipsizeMode ={'tail'}>{I18n.t('partner_tab_intro')}：{item.summaryBio}</Text>
            </Body>
        </ListItem>
        </Card>
 );
};
render(){ // eslint-disable-line
    if(this.props.allPartnersInfo){
        return(
            <FlatList
        data={this.props.allPartnersInfo}
        renderItem = {this.renderItem}
        keyExtractor={item => item.user_id}/>
    )
    }else{
        return (<ScrollView padder><Spinner color="blue" /></ScrollView>);
    }
}
}
const mapStateToProps = (state) => ({
    allPartnersInfo: state.allPartnersInfo,
});

export default connect(mapStateToProps)(PartnerPartner);