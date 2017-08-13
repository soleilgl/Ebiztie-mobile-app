import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';

import I18n from '../../../i18n/i18n';
import { getLanguages } from 'react-native-i18n'
import styles from './styles';

import { Home } from '../../AppNavigator';
import { uploadImageRegister, getProfileImage, changeMyBasicInfo, changeMyAdditionalInfo, changeMySurveyInfo, changeMyTagsInfo, changeMySkills, changeMySetting, addMyEmployerInfo, addSchoolInfo, changeMyEmployerInfo, changeMySchoolInfo} from '../../actions';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class Setup extends Component {
  static navigationOptions = {
    title: '我的设置',
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
        this.handleImageUpload =  this.handleImageUpload.bind(this);
        this.handleChangeMyBasicInfo = this.handleChangeMyBasicInfo.bind(this);
        this.handleChangeMyAdditionalInfo = this.handleChangeMyAdditionalInfo.bind(this);
        this.handleChangeMySurvey = this.handleChangeMySurvey.bind(this);
        this.handleChangeMyTags = this.handleChangeMyTags.bind(this);
        this.handleChangeMySkills = this.handleChangeMySkills.bind(this);
        this.handleChangeMySetting = this.handleChangeMySetting.bind(this);
        this.handleAddMyEmployerInfo = this.handleAddMyEmployerInfo.bind(this);
        this.handleAddMySchoolInfo = this.handleAddMySchoolInfo.bind(this);
    }

    componentWillMount() {
      this.props.dispatch(getProfileImage())
}
    handleImageUpload(){
        const options = {
            //title: '选择头像',
            storageOptions: {
                skipBackup: false,
            }
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: {uri: response.uri}, fileName:response.fileName};
            // let source = { uri: response.uri};
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            // console.log('source is' + JSON.stringify(source))
            this.props.dispatch(uploadImageRegister(source))
        }
    });
    }
    handleChangeMyBasicInfo(){
      this.props.dispatch(changeMyBasicInfo())
    }
    handleChangeMyAdditionalInfo(){
      this.props.dispatch(changeMyAdditionalInfo())
    }
    handleChangeMySurvey(){
        this.props.dispatch(changeMySurveyInfo())
    }
    handleChangeMyTags(){
      this.props.dispatch(changeMyTagsInfo())
    }
    handleChangeMySkills(){
      this.props.dispatch(changeMySkills())
    }
    handleChangeMySetting(){
      this.props.dispatch(changeMySetting())
    }
    handleAddMyEmployerInfo(){
      this.props.dispatch(addMyEmployerInfo())
    }
    handleAddMySchoolInfo(){
      this.props.dispatch(addSchoolInfo())
    }
    handleChangeMyEmployerInfo(item){
        this.props.dispatch(changeMyEmployerInfo(item))
    }
    handleChangeMySchoolInfo(item){
        this.props.dispatch(changeMySchoolInfo())
    }
  render() {
      const avartarSource = this.props.avatarSource;
      const myInfo = this.props.myInfo.myBasicInfo;
      const myAdditionalInfo = this.props.myInfo.myAdditionalInfo;
      const mySurvey = this.props.myInfo.mySurvey;
      const myTags = this.props.myInfo.myTags;
      const mySkills = this.props.myInfo.mySkills;
    return (
      <Container style={styles.container}>
        <View style={styles.change_img}>
        <TouchableOpacity onPress={this.handleImageUpload}>
        <Thumbnail size={80} source={{uri: this.props.avatarSource}} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
        </TouchableOpacity>
        <Text style={{fontSize:10, alignSelf:'center'}}>{I18n.t('changeImage')}</Text>
        </View>
        <Content padder>
      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="md-person" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_basicInfo_title')}</Text>
          <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyBasicInfo}/>
          </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>昵称:{myInfo.nickname}</Text>
      <Text>{I18n.t('realname')}:{myInfo.realname}</Text>
      <Text>{I18n.t('gender')}:{myInfo.sex}</Text>
      <Text>{I18n.t('age')}:{myInfo.agerange}</Text>
      <Text>{I18n.t('location')}:{myInfo.location_full}</Text>
      <Text>{I18n.t('contactMethod')}:{myInfo.preferredContact}</Text>
      <Text>{I18n.t('setup_basicInfo_introduction')}:{myInfo.introduction}</Text>
      </Body>
      </CardItem>
      <CardItem footer style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-information-circle" style={{ color: '#DD5044' }} />
      <Text>{I18n.t('setup_hiddenInfo_title')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('email')}:{myInfo.email}</Text>
      <Text>{I18n.t('cellphone')}:{myInfo.phone}</Text>
      <Text>{I18n.t('facebook')}:{myInfo.facebook}</Text>
      <Text>{I18n.t('linkedin')}:{myInfo.linkedin}</Text>
      <Text>{I18n.t('twitter')}:{myInfo.twitter}</Text>
      <Text>{I18n.t('weChat')}:{myInfo.wechat}</Text>
      </Body>
      </CardItem>
      </Card>
      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-ionitron" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_additionalInfo_title')}</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyAdditionalInfo}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('visitReason')}:{myAdditionalInfo.visitReason}</Text>
      <Text>{I18n.t('setup_additionalInfo_selfie')}:{myAdditionalInfo.currentRole}</Text>
      <Text>{I18n.t('occupation')}:{myAdditionalInfo.occupation}</Text>
      <Text>{I18n.t('companyName')}:{myAdditionalInfo.company}</Text>
      <Text>{I18n.t('industry')}:{myAdditionalInfo.industry}</Text>
      <Text>{I18n.t('workingExperience')}:{myAdditionalInfo.yearOfExperience}</Text>
      <Text>{I18n.t('hobbies')}:{myAdditionalInfo.hobbies}</Text>
      <Text>{I18n.t('friendDescribeMe')}:{myAdditionalInfo.characters}</Text>
      </Body>
      </CardItem>
      </Card>
      <Card>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="md-laptop" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('employers')}</Text>
      <Button transparent style={{marginLeft:80}}>
      <Icon name="md-add" style={{ color: '#218bcb' }} onPress={this.handleAddMyEmployerInfo}/>
      </Button>
      </CardItem>
      {myAdditionalInfo.Employers.map((item, index) =>
      (<CardItem key={index}>
        <Body>
        <Text>{I18n.t('employerName')}：{item.name_cn}</Text>
        <Text>{I18n.t('from')}：{item.user_employer.start_date}</Text>
        <Text>{I18n.t('to')}：{item.user_employer.end_date}</Text>
        </Body>
      <Button transparent>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyEmployerInfo.bind(this,item)}/>
  </Button>
      <Button transparent>
      <Icon name="md-close" style={{ color: '#218bcb' }} />
  </Button>
      </CardItem>))}
      </Card>
      <Card>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="md-school" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_schoolsInfo_title')}</Text>
      <Button transparent style={{marginLeft:100}}>
      <Icon name="md-add" style={{ color: '#218bcb' }} onPress={this.handleAddMySchoolInfo}/>
      </Button>
      </CardItem>
      {myAdditionalInfo.Schools.map((item, index) =>
      (<CardItem key={index}>
        <Body>
      <Text>{I18n.t('schoolName')}：{item.name_cn}</Text>
      <Text>{I18n.t('from')}：{item.user_school.start_date}</Text>
      <Text>{I18n.t('to')}：{item.user_school.end_date}</Text>
        </Body>
      <Button transparent>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySchoolInfo.bind(this,item)}/>
      </Button>
      <Button transparent>
      <Icon name="md-close" style={{ color: '#218bcb' }} />
      </Button>
      </CardItem>))}
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-paper" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_surveyInfo_title')}</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySurvey}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('currentSituation')}:{mySurvey.currentSituation}</Text>
      <Text>{I18n.t('liketo')}:{mySurvey.myOrientation}</Text>
      <Text>{I18n.t('commitment')}:{mySurvey.cooperationMethod}</Text>
      <Text>{I18n.t('reward')}:{mySurvey.compensationOption}</Text>
      <Text>{I18n.t('entrepreneurExperience')}:{mySurvey.entrepreneurialExperience}</Text>
      <Text>{I18n.t('availableTime')}:{mySurvey.availableTime}</Text>
      <Text>{I18n.t('incubationStatus')}:{mySurvey.incubatorInfo}</Text>
      <Text>{I18n.t('incubatorName')}:</Text>
      <Text>{I18n.t('partner_survey_funding')}:{mySurvey.selfFunding}</Text>
      <Text>{I18n.t('businessDirection')}:{mySurvey.businessDirection}</Text>
      <Text>{I18n.t('partner_survey_location')}:{mySurvey.businessLocation}</Text>
      <Text>{I18n.t('partner_survey_lookfor')}:{mySurvey.innerQualities}</Text>
      <Text>{I18n.t('partner_survey_myBusinessVentures')}:{mySurvey.selfFunding}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-pricetags" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('tags')}</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyTags}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('tags')}:{myTags.tags}</Text>
      </Body>
      </CardItem>
      </Card>
      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-build" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_skillInfo_title')}</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySkills}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('specialities')}:{mySkills.specialty}</Text>
      <Text>{I18n.t('skills')}:{mySkills.skill}</Text>
      <Text>{I18n.t('patents')}:{mySkills.patent}</Text>
      <Text>{I18n.t('certificates')}{mySkills.certificate}</Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-options" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_setting_title')}</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySetting}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>{I18n.t('oldPassword')}:</Text>
      <Text>{I18n.t('newPassword')}:</Text>
      <Text>{I18n.t('confirmPassword')}:</Text>
      </Body>
      </CardItem>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('contactMethod')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text></Text>
      </Body>
      </CardItem>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('setup_pauseAccount')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text></Text>
      </Body>
      </CardItem>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('language')}</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-star" style={{ color: '#218bcb' }} />
      <Text>{I18n.t('setup_VIPSubscription_title')}</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} />
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text></Text>
      </Body>
      </CardItem>
        </Card>

      <Card style={styles.mb}>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>{I18n.t('more')}</Text>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
          <Button transparent>
      <Icon name="ios-list-box" style={{ color: '#00ced1' }} />
      <Text>{I18n.t('setup_storyInfo_title')}</Text>
      </Button>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
      <Button transparent>
        <Icon name="ios-briefcase" style={{ color: '#3B579D' }} />
        <Text>{I18n.t('setup_businessInfo_title')}</Text>
      </Button>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
      <Button transparent>
        <Icon name="logo-buffer" style={{ color: '#3B579D' }} />
        <Text>{I18n.t('setup_projectInfo_title')}</Text>
      </Button>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
      <Button transparent>
        <Icon name="ios-bicycle" style={{ color: '#3B579D' }} />
        <Text>活动</Text>
      </Button>
      </CardItem>
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
    avatarSource: state.avatarSource,
    myInfo: state.myInfo,
})
export default connect(mapStateToProps) (Setup);
