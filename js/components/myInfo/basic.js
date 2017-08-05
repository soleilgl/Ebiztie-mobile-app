import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input, Left, Picker, Right, Textarea} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

import { Home } from '../../AppNavigator';
import { nicknameChange } from '../../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class BasicInfo extends Component {
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
        this.handleNicknameChange = this.handleNicknameChange.bind(this);
    }
    handleNicknameChange(event){
        this.props.dispatch(nicknameChange(event.nativeEvent.text))
    }
    render() {
        const myInfo = this.props.myInfo.myBasicInfo;
        const genderNum = this.props.myInfo.myBasicInfo.sex+"";
        const ageNum = this.props.myInfo.myBasicInfo.agerange+"";
        const contactNum = this.props.myInfo.myBasicInfo.preferredContact+"";
        return (
    <Container style={styles.container}>
    <Content padder>
    <List>

        <ListItem>
        <Text style={{marginLeft:140, color:'#218bcb'}}>基本信息</Text>
        </ListItem>

        <ListItem>
        <Text>昵称: </Text>
        <InputGroup>
        <Input regular type="text" ref="nickname" placeholder="昵称" value={myInfo.nickname} onChange={this.handleNicknameChange} />
        </InputGroup>
        </ListItem>

        <ListItem>
        <Text>实名: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.realname} />
        </InputGroup>
        </ListItem>

        <ListItem>
        <Left>
        <Text>性别 (请选择):</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={genderNum} >
        <Item label="男" value="1" />
        <Item label="女" value="2" />
        </Picker>
        </Content>
        <Right />
        </ListItem>

        <ListItem>
        <Left>
        <Text>年龄 (请选择):</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown"  type="text" selectedValue={ageNum} >
        <Item label="<25岁" value="1" />
        <Item label="25岁-35岁" value="2" />
        <Item label="35岁-45岁" value="3" />
        <Item label=">45岁" value="4" />
        <Item label="不详" value="5" />
        </Picker>
        </Content>
        <Right />
        </ListItem>

        <ListItem>
        <Text>城市: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.location_full}/>
        </InputGroup>
        </ListItem>

        <ListItem>
        <Left>
        <Text>联系方式 (请选择):</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown"  type="text" selectedValue={contactNum} >
        <Item label="短信(SMS)" value="1" />
        <Item label="邮件" value="2" />
        <Item label="电话" value="3" />
        </Picker>
        </Content>
        <Right />
        </ListItem>

        <Text style={{margin:20}}>简介</Text>
        <View padder>
        <Textarea rowSpan={5} bordered placeholder="自我简介" type="text" ref="introduction" value={myInfo.introduction} onChange={this.handleIntroductionRegister}/>
        </View>

        <Card style={{marginTop:20}}>
        <CardItem header style={{backgroundColor:'#f5f5f5'}}>
        <Text>下列信息不对外公开</Text>
        </CardItem>
        <List>
        <ListItem>
        <Text>邮箱: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.email}/>
        </InputGroup>
        </ListItem>
        <ListItem>
        <Text>手机号码: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.phone}/>
        </InputGroup>
        </ListItem>
        <ListItem>
        <Text>Facebook: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.facebook}/>
    </InputGroup>
        </ListItem>
        <ListItem>
        <Text>Linkedin: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.linkedin}/>
    </InputGroup>
        </ListItem>
        <ListItem>
        <Text>Twitter: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.twitter}/>
    </InputGroup>
        </ListItem>
        <ListItem>
        <Text>WeChat: </Text>
        <InputGroup>
        <Input type="text" ref="realname" placeholder="姓名" value={myInfo.wechat}/>
    </InputGroup>
        </ListItem>
        </List>
        </Card>
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
export default connect(mapStateToProps) (BasicInfo);
