import React, { Component } from 'react';
import { List, ListItem, Text, Body, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getAllBusinessInfo } from '../../actions';

const bizimg = require('../../../img/discoverlogo.jpg');

class PartnerBusiness extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '商务合作',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('BusinessDetail', {});
  };
constructor(props) {
    super(props);
    this.handleBusinessDetail =  this.handleBusinessDetail.bind(this);
}
componentWillMount() {
    this.props.dispatch(getAllBusinessInfo());
}
handleBusinessDetail() {
    this.props.dispatch(getBusinessInfo());
}
  render() { // eslint-disable-line
    if(this.props.allBusinessInfo){
        return(
            <ScrollView padder>
        <Card>
        <List>
        {this.props.allBusinessInfo.map((item, index) =>
        (<ListItem key={index}>
            <TouchableOpacity onPress={this.handlePartnerDetail}>
            <Thumbnail square size={80} source={bizimg} />
            </TouchableOpacity>
            <Body>
            <Text>{item.name}</Text>
        <Text>类别：<Text note>{item.type}</Text></Text>
        <Text>行业：<Text note>{item.industry}</Text></Text>
        <Text numberOfLines={5} ellipsizeMode ={'tail'}>概要<Text note>{item.summary}</Text></Text>
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
    allBusinessInfo: state.allBusinessInfo,
});

export default connect(mapStateToProps)(PartnerBusiness);
