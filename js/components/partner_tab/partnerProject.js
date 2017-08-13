import React, { Component } from 'react';
import { Card, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllProjectsInfo, getProjectInfo } from '../../actions';
import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

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
        <Text>{I18n.t('project_tab_name')}: {item.name}</Text>
        <Text>{I18n.t('businessDirection')}：{item.field}</Text>
        <Text numberOfLines={5} ellipsizeMode ={'tail'}>{I18n.t('summary')}：{item.description}</Text>
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
