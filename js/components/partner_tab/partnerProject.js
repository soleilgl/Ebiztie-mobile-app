import React, { Component } from 'react';
import { Card, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getAllProjectsInfo } from '../../actions';

const proimg = require('../../../img/web-cover1.jpg');

class PartnerProject extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合作项目',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('ProjectDetail', {});
  };
constructor(props) {
    super(props);
    this.handleProjectDetail =  this.handleProjectDetail.bind(this);
}
componentWillMount() {
    this.props.dispatch(getAllProjectsInfo());
}
handleProjectDetail() {
    this.props.dispatch(getProjectInfo());
}
  render() { // eslint-disable-line
    if(this.props.allProjectsInfo){
        return(
            <ScrollView padder>
        <Card>
        <List>
        {this.props.allProjectsInfo.map((item, index) =>
        (<ListItem key={index}>
            <TouchableOpacity onPress={this.handlePartnerDetail}>
    <Thumbnail square size={80} source={proimg} />
            </TouchableOpacity>
            <Body>
            <Text>{item.name}</Text>
        <Text>分类：<Text note>{item.field}</Text></Text>
        <Text numberOfLines={5} ellipsizeMode ={'tail'}>介绍：<Text note>{item.description}</Text></Text>
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
    allProjectsInfo: state.allProjectsInfo,
});

export default connect(mapStateToProps)(PartnerProject);
