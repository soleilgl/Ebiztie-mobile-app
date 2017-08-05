import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input, Left, Picker, Right, Textarea} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';
import {  } from '../../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class SettingInfo extends Component {
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
        const myAdditionalInfo = this.props.myInfo.mySetting;
        return (
            <Container style={styles.container}>
    <Content padder>
        <Card style={{marginTop:20}}>
    <CardItem header style={{backgroundColor:'#f5f5f5'}}>
    <Text>更改密码</Text>
        </CardItem>
        <List>
        <ListItem>
        <Text>旧密码: </Text>
        <InputGroup>
        <Input type="text" ref="oldpw" placeholder="旧密码" />
    </InputGroup>
        </ListItem>
        <ListItem>
        <Text>新密码: </Text>
        <InputGroup>
        <Input type="text" ref="newpw" placeholder="新密码" />
    </InputGroup>
        </ListItem>
        <ListItem>
        <Text>确认密码: </Text>
        <InputGroup>
        <Input type="text" ref="confirmpw" placeholder="确认密码" />
    </InputGroup>
        </ListItem>
        </List>
        <View style={styles.buttonbox} >
        <Button block style={styles.signinbtn}>
        <Text style={{ fontSize: 15 }} >保存</Text>
        </Button>
        </View>
        </Card>

        <Card style={{marginTop:20}}>
        <CardItem header style={{backgroundColor:'#f5f5f5'}}>
        <Text>语言选项</Text>
        </CardItem>

        <CardItem>
        <Left>
        <Text>选择语言: </Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={'1'} >
        <Item label="中文" value="1" />
        <Item label="English" value="2" />
        </Picker>
        </Content>
        <Right />
        </CardItem>

        <View style={styles.buttonbox} >
        <Button block style={styles.signinbtn}>
        <Text style={{ fontSize: 15 }} >保存</Text>
        </Button>
        </View>
        </Card>



        <Card style={{marginTop:20}}>
        <CardItem header style={{backgroundColor:'#f5f5f5'}}>
        <Text>Contact Preference</Text>
        </CardItem>

        <CardItem>
        <Text> I allow these people contact me:</Text>
        </CardItem>
        <CardItem>
        <Left>
        <Text>请选择</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={'1'} >
            <Item label="All locations" value="1" />
            <Item label="Only in my state/province" value="2" />
            </Picker>
            </Content>
            <Right />
        </CardItem>

        <View style={styles.buttonbox} >
        <Button block style={styles.signinbtn}>
        <Text style={{ fontSize: 15 }} >保存</Text>
        </Button>
        </View>
        </Card>

        <Card style={{marginTop:20}}>
        <CardItem header style={{backgroundColor:'#f5f5f5'}}>
        <Text>Pause or Delete Your Account</Text>
        </CardItem>
        <CardItem>
        <Text>You can choose to pause or delete your account. The difference between "pausing" your account and "deleting" your account is that with "pausing" the account, you can log in again to automatically activate your account. On the other hand, if you choose to "delete" the account, all information of your account will be permanently deleted. if you need to login to the website, you will need to register for a new account again.</Text>
        </CardItem>
            <CardItem>
        <Left>
        <Text>请选择:</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={'1'} >
        <Item label="All locations" value="1" />
        <Item label="Only in my state/province" value="2" />
        </Picker>
        </Content>
            </CardItem>
        <View style={styles.buttonbox} >
        <Button block style={styles.signinbtn}>
        <Text style={{ fontSize: 15 }} >保存</Text>
        </Button>
        </View>
        </Card>

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
export default connect(mapStateToProps) (SettingInfo);
