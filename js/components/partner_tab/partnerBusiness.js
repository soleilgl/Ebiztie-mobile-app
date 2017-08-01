import React, { Component } from 'react';
import { List, ListItem, Text, Body, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllBusinessInfo, getBusinessInfo } from '../../actions';

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
        <Text>名称：<Text note>{item.name}</Text></Text>
        <Text>行业：<Text note>{item.industry}</Text></Text>
        <Text>地点：<Text note>{item.location}</Text></Text>
        <Text numberOfLines={5} ellipsizeMode ={'tail'}>概要：<Text note>{item.summary}</Text></Text>
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
