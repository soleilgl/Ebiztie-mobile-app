import React, { Component } from 'react';
import { List, ListItem, Text, Body, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllBusinessInfo, getBusinessInfo } from '../../actions';
import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

const bizimg = require('../../../img/discoverlogo.jpg');

class PartnerBusiness extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '商务合作',
  };

constructor(props) {
    super(props);
    this.handleBusinessDetail =  this.handleBusinessDetail.bind(this);
}
componentWillMount() {
    this.props.dispatch(getAllBusinessInfo());
}
handleBusinessDetail(item) {
    this.props.dispatch(getBusinessInfo(item));
}
renderItem = ({ item }) => {
    return (
    <Card>
        <ListItem>
        <TouchableOpacity onPress={this.handleBusinessDetail.bind(this, item)}>
        <Thumbnail square size={80} source={{uri: item.icon}} />
        </TouchableOpacity>
        <Body>
        <Text>{I18n.t('business_tab_name')}：{item.name}</Text>
        <Text>{I18n.t('industry')}：{item.industry}</Text>
        <Text>{I18n.t('location')}：{item.location}</Text>
        <Text numberOfLines={5} ellipsizeMode ={'tail'}>{I18n.t('summary')}：{item.summary}</Text>
        </Body>
        </ListItem>
    </Card>
);
};

render(){ // eslint-disable-line
    if(this.props.allBusinessInfo){
        return(
            <FlatList
        data={this.props.allBusinessInfo}
        renderItem = {this.renderItem}
        keyExtractor={item => item.id}/>
    )
    }else{
        return (<ScrollView padder><Spinner color="blue" /></ScrollView>);
    }
}
}
const mapStateToProps = (state) => ({
    allBusinessInfo: state.allBusinessInfo,
});

export default connect(mapStateToProps)(PartnerBusiness);
