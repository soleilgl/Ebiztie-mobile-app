import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Platform } from 'react-native';
import { Container, Left, Right, Header, Content, Body, Button, Icon, List, ListItem, InputGroup, Input, Picker, Text, Thumbnail, Textarea, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

import { nameRegister, nicknameRegister, emailRegister, password1Register, password2Register, countryRegister, genderRegister, ageRegister, roleRegister, situationRegister, visitReasonRegister, introductionRegister, signup, registerAgreement} from '../../actions';

const Item = Picker.Item;
const userphoto = require('../../../img/user-pic.png');
const logo = require('../../../img/Ebiztie.jpg');

class Signup extends Component {
  static navigationOptions = {
    header: null
  }
    constructor(props) {
        super(props);
        this.handleNameRegister = this.handleNameRegister.bind(this);
        this.handleNicknameRegister = this.handleNicknameRegister.bind(this);
        this.handleEmailRegister = this.handleEmailRegister.bind(this);
        this.handlePassword1Register = this.handlePassword1Register.bind(this);
        this.handlePassword2Register = this.handlePassword2Register.bind(this);
        this.handleCountryRegister = this.handleCountryRegister.bind(this);
        this.handleGenderRegister = this.handleGenderRegister.bind(this);
        this.handleAgeRegister = this.handleAgeRegister.bind(this);
        this.handleRoleRegister = this.handleRoleRegister.bind(this);
        this.handleSituationRegister = this.handleSituationRegister.bind(this);
        this.handleVisitReasonRegister = this.handleVisitReasonRegister.bind(this);
        this.handleIntroductionRegister = this.handleIntroductionRegister.bind(this);
        this.handleRegisterAgreement = this.handleRegisterAgreement.bind(this);
    }
    handleNameRegister(event){
    this.props.dispatch(nameRegister(event.nativeEvent.text))
    }
    handleNicknameRegister(event){
      this.props.dispatch(nicknameRegister(event.nativeEvent.text))
    }
    handleEmailRegister(event){
      this.props.dispatch(emailRegister(event.nativeEvent.text))
    }
    handlePassword1Register(event){
      this.props.dispatch(password1Register(event.nativeEvent.text))
    }
    handlePassword2Register(event){
      this.props.dispatch(password2Register(event.nativeEvent.text))
    }
    handleCountryRegister(event){
      this.props.dispatch(countryRegister(event.nativeEvent.text))
    }
    handleGenderRegister(value){
      this.props.dispatch(genderRegister(value))
    }
    handleAgeRegister(value){
        this.props.dispatch(ageRegister(value))
    }
    handleRoleRegister(value){
        this.props.dispatch(roleRegister(value))
    }
    handleSituationRegister(value){
        this.props.dispatch(situationRegister(value))
    }
    handleVisitReasonRegister(value){
        this.props.dispatch(visitReasonRegister(value))
    }
    handleIntroductionRegister(event){
      this.props.dispatch(introductionRegister(event.nativeEvent.text))
    }
    handleRegisterAgreement(){
      this.props.dispatch(registerAgreement())
    }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#FFF' }} >
          <View>
            <Image source={logo} style={styles.logo} />
          </View>
        </Header>

        <Content style={styles.contentbox}>
          <TouchableOpacity>
            <Thumbnail size={80} source={userphoto} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
          </TouchableOpacity>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="md-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel type="text" ref="realname" placeholder="姓名" value={this.props.realname} onChange={ this.handleNameRegister}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="md-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel type="text" ref="nickname" placeholder="昵称" value={this.props.nickname} onChange={this.handleNicknameRegister}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
                <Input placeholder="邮箱" type="text" ref="email" value={this.props.email} onChange={this.handleEmailRegister}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="密码" secureTextEntry type="password" ref="password1" value={this.props.password} onChange={this.handlePassword1Register} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="确认密码" secureTextEntry type="password" ref="password2" value={this.props.password2} onChange={this.handlePassword2Register} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-globe-outline" style={{ color: '#0A69FE' }} />
                <Input inlineLabel placeholder="国家／地区" type="text" ref="country" value={this.props.country} onChange={this.handleCountryRegister} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                <Text>性别</Text>
              </Left>
              <Content>
                <Picker iosHeader="请选择" mode="dropdown" type="text" selectedValue={this.props.gender} onValueChange={this.handleGenderRegister}>
                  <Item label="男" value="1" />
                  <Item label="女" value="2" />
                </Picker>
              </Content>
              <Right />
            </ListItem>


            <ListItem>
              <Left>
              <Text>年龄</Text>
              </Left>
              <Content>
              <Picker iosHeader="请选择" mode="dropdown"  type="text" selectedValue={this.props.age} onValueChange={this.handleAgeRegister} >
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
              <Left>
                <Text>我是...</Text>
              </Left>
              <Content>
                <Picker iosHeader="请选择" mode="dropdown" selectedValue={this.props.role} onValueChange={this.handleRoleRegister}>
                  <Item label="企业家" value="企业家" />
                  <Item label="初创公司创始人" value="初创公司创始人" />
                  <Item label="运营方面权威" value="运营方面权威" />
                  <Item label="产品经理" value="产品经理" />
                  <Item label="某领域方面权威" value="某领域方面权威" />
                  <Item label="技术人才" value="技术人才" />
                  <Item label="设计者" value="设计者" />
                  <Item label="市场方面权威" value="市场方面权威" />
                  <Item label="专家" value="专家" />
                  <Item label="中小企业自营者" value="中小企业自营者" />
                  <Item label="投资人" value="投资人" />
                  <Item label="其他" value="其他" />
                </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
              <Left>
                <Text>我现在...</Text>
              </Left>
              <Content>
                <Picker iosHeader="请选择" mode="dropdown" selectedValue={this.props.situation} onValueChange={this.handleSituationRegister}>
                  <Item label="全职企业家" value="1" />
                  <Item label="兼职企业家" value="2" />
                  <Item label="需要项目合作伙伴" value="3" />
                  <Item label="寻找项目投资可能性" value="4" />
                  <Item label="自主研发" value="5" />
                  <Item label="寻找可投资的机会" value="6" />
                  <Item label="有专长／专利／市场资源，正在寻找商机" value="7" />
                  <Item label="寻找有潜在价值的初创企业" value="8" />
                  <Item label="拥有中小企业并且寻找机会扩充" value="9" />
                  <Item label="建立自己的品牌" value="10" />
                  <Item label="产能有限需要产业升级" value="11" />
                  <Item label="产能过剩，寻找扩充机会" value="12" />
                </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
            <Left>
            <Text>我希望...</Text>
            </Left>
            <Content>
            <Picker iosHeader="请选择" mode="dropdown" selectedValue={this.props.visitReason} onValueChange={this.handleVisitReasonRegister}>
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


            <View padder style={styles.introbox}>
              <Textarea rowSpan={5} bordered placeholder="自我简介" type="text" ref="introduction" value={this.props.introduction} onChange={this.handleIntroductionRegister}/>
            </View>
            <View style={{margin:10}}>
                <Text>*注册即表示您同意遵守<Text style={{color:'red', fontWeight: 'bold'}} onPress={this.handleRegisterAgreement}>《使用协议》</Text></Text>
            </View>
          </List>
          <Button style={styles.submitbtn} onPress={() => this.props.navigation.dispatch(signup())}>
            <Text style={{ fontSize: 15, marginLeft: 70 }}>提交</Text>
          </Button>
            <View style={styles.messagebox}>
             <Text style={styles.messagebody}>{this.props.signupErrorMessage}</Text>
            </View>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
    realname:state.signupInfo.realname,
    nickname: state.signupInfo.nickname,
    email: state.signupInfo.email,
    password1: state.signupInfo.password1,
    password2: state.signupInfo.password2,
    country: state.signupInfo.country,
    gender: state.signupInfo.gender,
    age:state.signupInfo.age,
    role:state.signupInfo.role,
    visitReason: state.signupInfo.visitReason,
    situation:state.signupInfo.situation,
    introduction:state.signupInfo.introduction,
    signupErrorMessage: state.signupErrorMessage,
});

export default connect(mapStateToProps) (Signup);
