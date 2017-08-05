import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input, Left, Picker, Right, Textarea} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';
import {  } from '../../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class SkillsInfo extends Component {
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
        const mySkills = this.props.myInfo.mySkills;
        return (
            <Container style={styles.container}>
    <Content padder>
            <List>
        <ListItem>
        <Text style={{marginLeft:140, color:'#218bcb'}}>更改特长</Text>
        </ListItem>

<Text style={{margin:20}}>My Specialties: </Text>
<View padder>
<Textarea rowSpan={5} bordered type="text" ref="Specialties" value={mySkills.specialty}/>
</View>

<Text style={{margin:20}}>My Skills: </Text>
<View padder>
<Textarea rowSpan={5} bordered type="text" ref="Skills" value={mySkills.skill} />
</View>

<Text style={{margin:20}}>My Patents: </Text>
<View padder>
<Textarea rowSpan={5} bordered type="text" ref="Patents" value={mySkills.patent}/>
</View>

<Text style={{margin:20}}>My Professional Certificates and Awards: </Text>
<View padder>
<Textarea rowSpan={5} bordered type="text" ref="Certificates" value={mySkills.certificate} />
</View>
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
export default connect(mapStateToProps) (SkillsInfo);
