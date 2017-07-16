import React, { Component } from 'react';
import { Container, Content, Header, Title, Card, CardItem, Button, Icon, Text, Footer, FooterTab, List, ListItem,Thumbnail } from 'native-base';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';

import { Home } from '../../AppNavigator';
import { uploadImageRegister, getProfileImage } from '../../actions';


const deviceHeight = Dimensions.get('window').height;

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
  render() {
      const avartarSource = this.props.avatarSource;
    return (
      <Container style={styles.container}>
        <View style={styles.change_img}>
          <TouchableOpacity onPress={this.handleImageUpload}>
            <Thumbnail size={80} source={{uri: this.props.avatarSource}} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
          </TouchableOpacity>
          <Text style={{fontSize:10, alignSelf:'center'}}>点击更换头像</Text>
        </View>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Icon name="ios-information-circle" style={{ color: '#DD5044' }} />
              <Text>个人信息</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-ionitron" style={{ color: '#DD5044' }} />
              <Text>其他信息</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-pricetags" style={{ color: '#DD5044' }} />
              <Text>标签</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-build" style={{ color: '#DD5044' }} />
              <Text>专长</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-images" style={{ color: '#DD5044' }} />
              <Text>图片</Text>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem>
              <Icon name="ios-paper" style={{ color: '#00ced1' }} />
              <Text>问卷</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-list-box" style={{ color: '#00ced1' }} />
              <Text>故事</Text>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem>
              <Icon name="ios-briefcase" style={{ color: '#3B579D' }} />
              <Text>商务</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-buffer" style={{ color: '#3B579D' }} />
              <Text>项目</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-bicycle" style={{ color: '#3B579D' }} />
              <Text>活动</Text>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem>
              <Icon name="ios-options" style={{ color: '#daa520' }} />
              <Text>设置</Text>
            </CardItem>
            <CardItem>
              <Icon name="ios-star" style={{ color: '#daa520' }} />
              <Text>VIP用户</Text>
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
              <Icon name="ios-walk-outline" style={styles.footericon} />
            </Button>
            <Button
              title="Go to Setup page">
              <Icon name="ios-settings-outline" style={styles.footericon} />
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Notification', {})}
              title="Go to Notification page">
              <Icon name="ios-notifications-outline" style={styles.footericon} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
    avatarSource: state.avatarSource,
})
export default connect(mapStateToProps) (Setup);
