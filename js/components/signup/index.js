import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Platform, Dimensions } from 'react-native';
import { Container, Left, Right, Header, Content, Body, Button, Icon, List, ListItem, InputGroup, Input, Picker, Text, Thumbnail, Textarea, CheckBox } from 'native-base';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

import styles from './styles';

import { nameRegister, nicknameRegister, emailRegister, password1Register, password2Register, countryRegister, genderRegister, ageRegister, roleRegister, situationRegister, visitReasonRegister, introductionRegister, signup, registerAgreement, uploadImageRegister} from '../../actions';

const Item = Picker.Item;
const logo = require('../../../img/Ebiztie.jpg');
const deviceHeight = Dimensions.get('window').height;

class Signup extends Component {
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
    handleRoleRegister(label){
        this.props.dispatch(roleRegister(label))
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

    componentDidMount () {
        getLanguages().then(languages => {
            console.log("support language is" + languages) // ['en-US', 'en']
        })
    }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.contentbox}>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="md-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel type="text" ref="realname" placeholder={I18n.t('fullname')} value={this.props.realname} onChange={ this.handleNameRegister}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="md-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel type="text" ref="nickname" placeholder={I18n.t('nickname')} value={this.props.nickname} onChange={this.handleNicknameRegister}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
                <Input placeholder={I18n.t('email')} type="text" ref="email" value={this.props.email} onChange={this.handleEmailRegister}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder={I18n.t('password')} secureTextEntry type="password" ref="password1" value={this.props.password} onChange={this.handlePassword1Register} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder={I18n.t('confirmPassword')} secureTextEntry type="password" ref="password2" value={this.props.password2} onChange={this.handlePassword2Register} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-globe-outline" style={{ color: '#0A69FE' }} />
                <Input inlineLabel placeholder={I18n.t('location')} type="text" ref="country" value={this.props.country} onChange={this.handleCountryRegister} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                <Text>{I18n.t('gender')}</Text>
              </Left>
              <Content>
                <Picker iosHeader={I18n.t('signup_iosHeader')} mode="dropdown" type="text" selectedValue={this.props.gender} onValueChange={this.handleGenderRegister}>
                  <Item label={I18n.t('gender_male')} value="1" />
                  <Item label={I18n.t('gender_female')} value="2" />
                </Picker>
              </Content>
              <Right />
            </ListItem>


            <ListItem>
              <Left>
              <Text>{I18n.t('age')}</Text>
              </Left>
              <Content>
              <Picker iosHeader={I18n.t('signup_iosHeader')} mode="dropdown"  type="text" selectedValue={this.props.age} onValueChange={this.handleAgeRegister} >
              <Item label={I18n.t('signup_age_value1')} value="1" />
              <Item label={I18n.t('signup_age_value2')} value="2" />
              <Item label={I18n.t('signup_age_value3')} value="3" />
              <Item label={I18n.t('signup_age_value4')} value="4" />
              <Item label={I18n.t('signup_age_value5')} value="5" />
              </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
              <Left>
                <Text>{I18n.t('currentRole')}</Text>
              </Left>
              <Content>
                <Picker iosHeader={I18n.t('signup_iosHeader')} mode="dropdown" selectedValue={this.props.role} onValueChange={this.handleRoleRegister}>
                  <Item label={I18n.t('currentRole_value1')} value="1"/>
                  <Item label={I18n.t('currentRole_value2')} value="2" />
                  <Item label={I18n.t('currentRole_value3')} value="3" />
                  <Item label={I18n.t('currentRole_value4')} value="4"/>
                  <Item label={I18n.t('currentRole_value5')} value="5"/>
                  <Item label={I18n.t('currentRole_value6')} value="6" />
                  <Item label={I18n.t('currentRole_value7')} value="7" />
                  <Item label={I18n.t('currentRole_value8')} value="8"/>
                  <Item label={I18n.t('currentRole_value9')} value="9"/>
                  <Item label={I18n.t('currentRole_value10')} value="10" />
                  <Item label={I18n.t('currentRole_value11')} value="11"/>
                  <Item label={I18n.t('currentRole_value12')} value="12" />
                </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
              <Left>
                <Text>{I18n.t('signup_situation')}</Text>
              </Left>
              <Content>
                <Picker iosHeader={I18n.t('signup_iosHeader')} mode="dropdown" selectedValue={this.props.situation} onValueChange={this.handleSituationRegister}>
                  <Item label={I18n.t('currentSituation_value1')} value="1" />
                  <Item label={I18n.t('currentSituation_value2')} value="2" />
                  <Item label={I18n.t('currentSituation_value3')} value="3" />
                  <Item label={I18n.t('currentSituation_value4')} value="4" />
                  <Item label={I18n.t('currentSituation_value5')} value="5" />
                  <Item label={I18n.t('currentSituation_value6')} value="6" />
                  <Item label={I18n.t('currentSituation_value7')} value="7" />
                  <Item label={I18n.t('currentSituation_value8')} value="8" />
                  <Item label={I18n.t('currentSituation_value9')} value="9" />
                  <Item label={I18n.t('currentSituation_value10')} value="10" />
                  <Item label={I18n.t('currentSituation_value11')} value="11" />
                  <Item label={I18n.t('currentSituation_value12')} value="12" />
                </Picker>
              </Content>
              <Right />
            </ListItem>

            <ListItem>
            <Left>
            <Text>{I18n.t('visitReason')}</Text>
            </Left>
            <Content>
            <Picker iosHeader={I18n.t('signup_iosHeader')} mode="dropdown" selectedValue={this.props.visitReason} onValueChange={this.handleVisitReasonRegister}>
            <Item label={I18n.t('visitReason_value1')} value="1" />
            <Item label={I18n.t('visitReason_value2')} value="2" />
            <Item label={I18n.t('visitReason_value3')} value="3" />
            <Item label={I18n.t('visitReason_value4')} value="4" />
            <Item label={I18n.t('visitReason_value5')} value="5" />
            <Item label={I18n.t('visitReason_value6')} value="6" />
            <Item label={I18n.t('visitReason_value7')} value="7" />
            <Item label={I18n.t('visitReason_value8')} value="8" />
            <Item label={I18n.t('visitReason_value9')} value="9" />
            <Item label={I18n.t('visitReason_value10')} value="10" />
            <Item label={I18n.t('visitReason_value11')} value="11" />
            <Item label={I18n.t('visitReason_value12')} value="12" />
            <Item label={I18n.t('visitReason_value13')}value="13" />
            <Item label={I18n.t('visitReason_value14')} value="14" />
            </Picker>
            </Content>
            <Right />
            </ListItem>


            <View padder style={styles.introbox}>
              <Textarea rowSpan={5} bordered placeholder={I18n.t('signup_introduction')} type="text" ref="introduction" value={this.props.introduction} onChange={this.handleIntroductionRegister}/>
            </View>
            <View style={{margin:10}}>
                <Text>*{I18n.t('signup_agreement')}<Text style={{color:'red', fontWeight: 'bold'}} onPress={this.handleRegisterAgreement}>{I18n.t('signup_agreement_tag')}</Text></Text>
            </View>
          </List>
          <Button style={styles.submitbtn} onPress={() => this.props.navigation.dispatch(signup())}>
            <Text style={{ fontSize: 15, marginLeft: 70 }}>{I18n.t('submit')}</Text>
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
