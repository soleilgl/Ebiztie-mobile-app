import React, { Component } from 'react';
import { Container, Content, Header, Item, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail, Body, InputGroup, Input} from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
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
        <Text style={{fontSize:10, alignSelf:'center'}}>点击更换头像</Text>
        </View>
        <Content padder>
      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="md-person" style={{ color: '#218bcb' }} />
      <Text>个人信息</Text>
          <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyBasicInfo}/>
          </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>nickname:<Text note>{myInfo.nickname}</Text></Text>
      <Text>realname:<Text note>{myInfo.realname}</Text></Text>
      <Text>gender:<Text note>{myInfo.sex}</Text></Text>
      <Text>age range:<Text note>{myInfo.agerange}</Text></Text>
      <Text>location:<Text note>{myInfo.location_full}</Text></Text>
      <Text>Preferred Contact Method:<Text note>{myInfo.preferredContact}</Text></Text>
      <Text>introduction:<Text note>{myInfo.introduction}</Text></Text>
      </Body>
      </CardItem>
      <CardItem footer style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-information-circle" style={{ color: '#DD5044' }} />
      <Text>下面信息不对外公开</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>email:<Text note>{myInfo.email}</Text></Text>
      <Text>cellphone:<Text note>{myInfo.phone}</Text></Text>
      <Text>Facebook:<Text note>{myInfo.facebook}</Text></Text>
      <Text>Linkedin:<Text note>{myInfo.linkedin}</Text></Text>
      <Text>Twitter:<Text note>{myInfo.twitter}</Text></Text>
      <Text>WeChat:<Text note>{myInfo.wechat}</Text></Text>
      </Body>
      </CardItem>
      </Card>
      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-ionitron" style={{ color: '#218bcb' }} />
      <Text>其他信息</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyAdditionalInfo}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>The Reason I Am Here Is:<Text note>{myAdditionalInfo.visitReason}</Text></Text>
      <Text>My Word Selfie:<Text note>{myAdditionalInfo.currentRole}</Text></Text>
      <Text>My Current Occupation:<Text note>{myAdditionalInfo.occupation}</Text></Text>
      <Text>Company Name:<Text note>{myAdditionalInfo.company}</Text></Text>
      <Text>My Industry:<Text note>{myAdditionalInfo.industry}</Text></Text>
      <Text>Years of Major Work Exp:<Text note>{myAdditionalInfo.yearOfExperience}</Text></Text>
      <Text>My Hobbies:<Text note>{myAdditionalInfo.hobbies}</Text></Text>
      <Text>A Friend Would Describe Me as:<Text note>{myAdditionalInfo.characters}</Text></Text>
      </Body>
      </CardItem>
      </Card>
      <Card>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="md-laptop" style={{ color: '#218bcb' }} />
      <Text>Well-known Employers</Text>
      <Button transparent style={{marginLeft:80}}>
      <Icon name="md-add" style={{ color: '#218bcb' }} onPress={this.handleAddMyEmployerInfo}/>
      </Button>
      </CardItem>
      {myAdditionalInfo.Employers.map((item, index) =>
      (<CardItem key={index}>
        <Body>
        <Text>公司名称：<Text note>{item.name_cn}</Text></Text>
        <Text>开始时间：<Text note>{item.user_employer.start_date}</Text></Text>
        <Text>结束时间：<Text note>{item.user_employer.end_date}</Text></Text>
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
      <Text>School(s) Attended</Text>
      <Button transparent style={{marginLeft:100}}>
      <Icon name="md-add" style={{ color: '#218bcb' }} onPress={this.handleAddMySchoolInfo}/>
      </Button>
      </CardItem>
      {myAdditionalInfo.Schools.map((item, index) =>
      (<CardItem key={index}>
        <Body>
      <Text>学校名称：<Text note>{item.name_cn}</Text></Text>
      <Text>开始时间：<Text note>{item.user_school.start_date}</Text></Text>
      <Text>结束时间：<Text note>{item.user_school.end_date}</Text></Text>
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
      <Text>问卷调查</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySurvey}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>My Current Situation:<Text note>{mySurvey.currentSituation}</Text></Text>
      <Text>I Would Like to:<Text note>{mySurvey.myOrientation}</Text></Text>
      <Text>If I Join a team, I Commit to:<Text note>{mySurvey.cooperationMethod}</Text></Text>
      <Text>If I Join a Team, the Type of Reward I Expect to Get is:<Text note>{mySurvey.compensationOption}</Text></Text>
      <Text>Entrepreneur Experience:<Text note>{mySurvey.entrepreneurialExperience}</Text></Text>
      <Text>My Available Time:<Text note>{mySurvey.availableTime}</Text></Text>
      <Text>Incubation Status:<Text note>{mySurvey.incubatorInfo}</Text></Text>
      <Text>Name of Incubator(if any):<Text note></Text></Text>
      <Text>About Funding:<Text note>{mySurvey.selfFunding}</Text></Text>
      <Text>My Business Direction:<Text note>{mySurvey.businessDirection}</Text></Text>
      <Text>My Preferred Location:<Text note>{mySurvey.businessLocation}</Text></Text>
      <Text>Qualities That I'm Looking for in My Business Partners:<Text note>{mySurvey.innerQualities}</Text></Text>
      <Text>My Successfully Established Business Ventures (if any):<Text note>{mySurvey.selfFunding}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-pricetags" style={{ color: '#218bcb' }} />
      <Text>我的标签</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMyTags}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>My Tags:<Text note>{myTags.tags}</Text></Text>
      </Body>
      </CardItem>
      </Card>
      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-build" style={{ color: '#218bcb' }} />
      <Text>我的专长</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySkills}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>My Specialties:<Text note>{mySkills.specialty}</Text></Text>
      <Text>My skills:<Text note>{mySkills.skill}</Text></Text>
      <Text>My Patents:<Text note>{mySkills.patent}</Text></Text>
      <Text>My Professional Certificates and Awards:<Text note>{mySkills.certificate}</Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-options" style={{ color: '#218bcb' }} />
      <Text>我的设置</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} onPress={this.handleChangeMySetting}/>
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>旧密码:<Text note></Text></Text>
      <Text>新密码:<Text note></Text></Text>
      <Text>确认密码:<Text note></Text></Text>
      </Body>
      </CardItem>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Text>联系方式</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>允许联系方式:<Text note></Text></Text>
      </Body>
      </CardItem>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Text>暂停／停止使用账户</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>允许联系方式:<Text note></Text></Text>
      </Body>
      </CardItem>
      <CardItem style={{backgroundColor:'#f5f5f5'}}>
      <Text>语言设定</Text>
      </CardItem>
      <CardItem>
      <Body>
      <Text>中文／英文:<Text note></Text></Text>
      </Body>
      </CardItem>
      </Card>

      <Card>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Icon name="ios-star" style={{ color: '#218bcb' }} />
      <Text>VIP用户</Text>
      <Button transparent style={{marginLeft:180}}>
      <Icon name="md-create" style={{ color: '#218bcb' }} />
      </Button>
      </CardItem>
      <CardItem>
      <Body>
      <Text>vip:<Text note></Text></Text>
      </Body>
      </CardItem>
        </Card>

      <Card style={styles.mb}>
      <CardItem header style={{backgroundColor:'#f5f5f5'}}>
      <Text>查看更多</Text>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
          <Button transparent>
      <Icon name="ios-list-box" style={{ color: '#00ced1' }} />
      <Text>故事</Text>
      </Button>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
      <Button transparent>
        <Icon name="ios-briefcase" style={{ color: '#3B579D' }} />
        <Text>商务</Text>
      </Button>
      </CardItem>
      <CardItem style={{alignSelf: 'center'}}>
      <Button transparent>
        <Icon name="logo-buffer" style={{ color: '#3B579D' }} />
        <Text>项目</Text>
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
