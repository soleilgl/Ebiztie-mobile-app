import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input, Left, Picker, Right, Textarea} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';
import {  } from '../../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class ChangeSchoolInfo extends Component {
    static navigationOptions = {
        title: '',
        headerTintColor: '#ffffff',
        headerStyle: {
            backgroundColor: '#218BC8',
            height:deviceHeight / 15,
        },
        headerTitleStyle:{
            fontSize:15
        }
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={styles.container}>
    <Content padder>

        <List>

        <ListItem>
        <Text style={{marginLeft:140, color:'#218bcb'}}>更改教育经历</Text>
        </ListItem>

        <Text>学校名称: </Text>
        <ListItem>
        <InputGroup>
        <Input inlineLabel type="text" ref="companyname" />
            </InputGroup>
            </ListItem>
            <Text>开始时间: </Text>
        <ListItem>
        <InputGroup>
        <Input inlineLabel type="text" ref="starttime" />
            </InputGroup>
            </ListItem>
            <Text>结束时间: </Text>
        <ListItem>
        <InputGroup>
        <Input type="text" ref="endtime" />
            </InputGroup>
            </ListItem>
            </List>


            <View style={styles.buttonbox} >
    <Button block style={styles.signinbtn}>
    <Text style={{ fontSize: 15 }} >保存</Text>
        </Button>
        <Button block style={styles.signupbtn} >
    <Text style={{ color: 'black', fontSize: 15 }} >取消</Text>
        </Button>
        </View>

        </Content>
        <Footer style={styles.footer}>
    <FooterTab style={styles.footer}>
    <Button
        onPress={() => this.props.navigation.navigate('Hotnews', {})}
        title="Go to Notification page">
            <Icon name="ios-paper-outline" style={styles.footericon} />
    </Button>
        <Button
        onPress={() => this.props.navigation.navigate('Favorite', {})}
        title="Go to Favorite page">
            <Icon name="ios-person-outline" style={styles.footericon} />
    </Button>
        <Button
        onPress={() => this.props.navigation.navigate('Chat', {})}
        title="Go to Chat page">
            <Icon name="ios-text-outline" style={styles.footericon} />
    </Button>
        <Button
        onPress={() => this.props.navigation.navigate('Activity', {})}
        title="Go to Activity page">
            <Icon name="ios-calendar-outline" style={styles.footericon} />
    </Button>
        <Button
        title="Go to Setup page">
            <Icon name="ios-settings-outline" style={styles.footericon} />
    </Button>
        </FooterTab>
        </Footer>
        </Container>
    );
    }
}
const mapStateToProps = (state) => ({
    myInfo: state.myInfo,
})
export default connect(mapStateToProps) (ChangeSchoolInfo);
