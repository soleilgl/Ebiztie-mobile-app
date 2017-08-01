import React, { Component } from 'react';
import { Card, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllProjectsInfo, getProjectInfo } from '../../actions';

const proimg = require('../../../img/web-cover1.jpg');

class PartnerProject extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合作项目',
  };

constructor(props) {
    super(props);
    this.handleProjectDetail =  this.handleProjectDetail.bind(this);
}
componentWillMount() {
    this.props.dispatch(getAllProjectsInfo());
}
handleProjectDetail(item) {
    this.props.dispatch(getProjectInfo(item));
}
renderItem = ({ item }) => {
    return (
    <Card>
        <ListItem>
        <TouchableOpacity onPress={this.handleProjectDetail.bind(this, item)}>
        <Thumbnail square size={80} source={{uri: item.icon}} />
        </TouchableOpacity>
        <Body>
        <Text>{item.name}</Text>
        <Text>分类：<Text note>{item.field}</Text></Text>
        <Text numberOfLines={5} ellipsizeMode ={'tail'}>介绍：<Text note>{item.description}</Text></Text>
        </Body>
        </ListItem>
    </Card>
);
};
render(){ // eslint-disable-line
    if(this.props.allProjectsInfo.length > 0){
        return(
            <FlatList
        data={this.props.allProjectsInfo}
        renderItem = {this.renderItem}
        keyExtractor={item => item.id}/>
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
