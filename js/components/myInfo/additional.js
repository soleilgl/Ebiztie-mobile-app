import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input, Left, Picker, Right, Textarea} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { Home } from '../../AppNavigator';
import {  } from '../../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class AdditionalInfo extends Component {
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
        const myAdditionalInfo = this.props.myInfo.myAdditionalInfo;
        const reasonNum = myAdditionalInfo.visitReason+"";
        const occupationNum = myAdditionalInfo.occupation+"";
        return (
        <Container style={styles.container}>
        <Content padder>
        <List>

        <ListItem>
        <Text style={{marginLeft:140, color:'#218bcb'}}>其他信息</Text>
        </ListItem>

        <ListItem>
        <Left>
        <Text> The Reason I Am Here Is(请选择):</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={reasonNum} >
            <Item label="建立自己的公司团队" value="1" />
            <Item label="进入初创企业" value="2" />
            <Item label="寻找投资机会" value="3" />
            <Item label="积极寻找新的商机" value="4" />
            <Item label="与专家／专业人士联系" value="5" />
            <Item label="确立合作伙伴关系" value="6" />
            <Item label="扩大客户群" value="7" />
            <Item label="扩展现有业务" value="8" />
            <Item label="市场开发" value="9" />
            <Item label="公司及品牌推广" value="10" />
            <Item label="建立合作者网络" value="11" />
            <Item label="联谊初创企业，增加投资机会" value="12" />
            <Item label="为并购寻找机会" value="13" />
            <Item label="展示个人专长" value="14" />
        </Picker>
        </Content>
        <Right />
        </ListItem>

            <ListItem>
            <Text>My Word Selfie: </Text>
        </ListItem>

            <ListItem>
            <Left>
            <Text>My Current Occupation(请选择):</Text>
        </Left>
        <Content>
        <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={occupationNum} >
            <Item label="Accounting" value="1" />
            <Item label="Administration" value="2" />
            <Item label="business Development" value="3" />
            <Item label="Buyer/Merchandising" value="4" />
            <Item label="consulting" value="5" />
            <Item label="corporate development" value="6" />
            <Item label="economic analysis /reaserch" value="317" />
            <Item label="education (administrator, faculty)" value="8" />
            <Item label="engineering" value="9" />
            <Item label="entrepreneurship" value="10" />
            <Item label="finance" value="11" />
            <Item label="fundraising/develop" value="12" />
            <Item label="health care/ medical professional" value="13" />
            <Item label="human resources" value="14" />
            <Item label="journalist/author/writer/editor" value="15" />
            <Item label="lawyer/legal professional" value="16" />
            <Item label="legislative aide/lobbying/advocate" value="17" />
            <Item label="management" value="18" />
            <Item label="manufacturing" value="19" />
            <Item label="marketing" value="20" />
            <Item label="merchandising/retail" value="21" />
            <Item label="military" value="22" />
            <Item label="multimedia production/graphic design" value="23" />
            <Item label="purchasing" value="24" />
            <Item label="real estate" value="25" />
            <Item label="research & development" value="26" />
            <Item label="sales" value="27" />
            <Item label="strategic planning" value="28" />
            <Item label="technology" value="29" />
            </Picker>
            </Content>
            <Right />
            </ListItem>

        <ListItem>
        <Text>Company Name: </Text>
        <InputGroup>
        <Input regular type="text" ref="CompanyName" placeholder="CompanyName" value={myAdditionalInfo.company}/>
        </InputGroup>
        </ListItem>

        <ListItem>
        <Text>My Industry(请选择):</Text>
            </ListItem>

        <ListItem>
        <Text>Years of Major Work Exp(请选择):</Text>
        </ListItem>

        <ListItem>
        <Text>My Hobbies: </Text>
        <InputGroup>
        <Input regular type="text" ref="MyHobbies" placeholder="MyHobbies" value={myAdditionalInfo.hobbies}/>
    </InputGroup>
        </ListItem>

        <Text style={{margin:20}}>A Friend Would Describe Me as:</Text>
        <View padder>
        <Textarea rowSpan={5} bordered type="text" ref="characters" value={myAdditionalInfo.characters} onChange={this.handleIntroductionRegister}/>
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
export default connect(mapStateToProps) (AdditionalInfo);
