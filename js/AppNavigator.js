
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, Platform, Dimensions, ScrollView , View } from 'react-native';
import { connect } from 'react-redux';
import { StyleProvider, variables, Drawer, Icon } from 'native-base';
import {StackNavigator, TabNavigator, tabBarOptions, CardStackStyleInterpolator, DrawerNavigator, DrawerItems } from 'react-navigation';


import Home from './components/home/';
import Signin from './components/signin/';
import Signup from './components/signup/';
import Partner from './components/partner/';
import PartnerPartner from './components/partner_tab/partnerPartner';
import PartnerBusiness from './components/partner_tab/partnerBusiness';
import PartnerProject from './components/partner_tab/partnerProject';
import PartnerDetail from './components/partnerdetail/partner';
import BusinessDetail from './components/partnerdetail/business';
import ProjectDetail from './components/partnerdetail/project';
import Favorite from './components/favorite';
import Activity from './components/activity';
import Chat from './components/chat';
import Setup from './components/setup';
import Hotnews from './components/hotnews';
import Notification from './components/notification';
import AllActivities from './components/activity_tab/allActivities';
import CreateActivities from './components/activity_tab/createActivities';
import MyActivities from './components/activity_tab/myActivities';
import HotnewsDetail from './components/hotnewsdetail';
import FavoriteBusiness from './components/favorite_tab/favoriteBusiness';
import FavoritePartner from './components/favorite_tab/favoritePartner';
import FavoriteProject from './components/favorite_tab/favoriteProject';
import FavoritePartnerDetail from './components/favoritedetail/partner';
import FavoriteProjectDetail from './components/favoritedetail/project';
import FavoriteBusinessDetail from './components/favoritedetail/business';
import ChatDetail from './components/chatdetail';
import ActivityDetail from './components/activitydetail';
import Search from './components/partner_search';
import CustomDrawerContentComponent from './components/partner_drawer/index';
import ActivateUser from './components/activation';
import Agreement from './components/agreement';
import VIP from './components/VIP';
import OfficialAccount from './components/official_account';
import Business from './components/business';
import Project from './components/project';
import BasicInfo from './components/myInfo/basic';
import AdditionalInfo from './components/myInfo/additional';
import SurveyInfo from './components/myInfo/survey';
import TagsInfo from './components/myInfo/tags';
import SkillsInfo from './components/myInfo/skill';
import SettingInfo from './components/myInfo/setting';
import AddEmployerInfo from './components/myInfo/add_employer_info';
import AddSchoolInfo from './components/myInfo/add_school_info';
import ChangeEmployerInfo from './components/myInfo/change_employer_info';
import ChangeSchoolInfo from './components/myInfo/change_school_info';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const ChangePartnership = TabNavigator({
  PartnerPartner: {
    screen: PartnerPartner,
  },
  PartnerBusiness: {
    screen: PartnerBusiness,
  },
  PartnerProject: {
    screen: PartnerProject,
  },
},
  { tabBarPosition:'top',
    tabBarOptions: {
    pressColor: '#f5fffa',
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#ffffff',
    activeTintColor: '#218BC8',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#ffffff',
      height:deviceHeight/18,
      padding:(Platform.OS === 'android') ? 2 : 8
    },
    labelStyle: {
      fontSize: 15,
    },
    // tabStyle: {
    //   borderWidth: 1,
    //   borderColor: '#ffffff',
    // },
    indicatorStyle: {
      backgroundColor: '#218BC8',
    },
  },
  });
  export const MyFavorite = TabNavigator({
    FavoritePartner: {
      screen: FavoritePartner,
    },
    FavoriteBusiness: {
      screen: FavoriteBusiness,
    },
    FavoriteProject: {
      screen: FavoriteProject,
    }
  },
    { tabBarOptions: {
      pressColor: '#f5fffa',
      activeBackgroundColor: '#ffffff',
      inactiveBackgroundColor: '#ffffff',
      activeTintColor: '#218BC8',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#ffffff',
        height: 30,
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 0,
      },
      // tabStyle: {
      //   borderWidth: 1,
      //   borderColor: '#ffffff',
      // },
      indicatorStyle: {
        backgroundColor: '#218BC8',
      },
    },
    });
  export const MyActivity = TabNavigator({
    AllActivities: {
      screen: AllActivities,
    },
    CreateActivities: {
      screen: CreateActivities,
    },
    Project: {
      screen: MyActivities,
    }
  },
    { tabBarOptions: {
      pressColor: '#f5fffa',
      activeBackgroundColor: '#ffffff',
      inactiveBackgroundColor: '#ffffff',
      activeTintColor: '#218BC8',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#ffffff',
        height: 30,
      },
      labelStyle: {
        fontSize: 13,
        marginTop: 0,
      },
      // tabStyle: {
      //   borderWidth: 1,
      //   borderColor: '#ffffff',
      // },
      indicatorStyle: {
        backgroundColor: '#218BC8',
      }
    }
    });
const DrawerStack = DrawerNavigator({
  Partner: {
    screen: Partner,
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      drawerIcon: <Icon name="ios-notifications" style={{ color: '#218BC8' }} />,
    },
  },
  Setup: {
    screen: Setup,
    navigationOptions: {
      drawerIcon: <Icon name="ios-settings" style={{ color: '#218BC8' }} />,
    },
  },
    VIP: {
        screen: VIP,
            navigationOptions: {
            drawerIcon: <Icon name="ios-notifications" style={{ color: '#218BC8' }} />,
        },
    },
    OfficialAccount: {
            screen: OfficialAccount,
                navigationOptions: {
                drawerIcon: <Icon name="ios-notifications" style={{ color: '#218BC8' }} />,
            },
        },
},
  { drawerWidth: deviceWidth / 2.5,
    contentOptions: {
      initialRouteName: Partner,
      activeTintColor: '#218BC8',
      inactiveTintColor: '#218BC8',
      activeBackgroundColor: 'lightgrey',
      inactiveBackgroundColor: '#ffffff',
      style: { marginVertical: 0 },
    },
    contentComponent: props => <CustomDrawerContentComponent {...props} />,
  },
  { headerMode: 'none' }
);
const PartnershipStack = StackNavigator({
  DrawerStack: {
    screen: DrawerStack,
  },
  PartnerDetail: {
    screen: PartnerDetail,
  },
  BusinessDetail: {
    screen: BusinessDetail,
  },
  ProjectDetail: {
    screen: ProjectDetail,
  },
  Business: {
        screen: Business,
    },
    Project: {
        screen: Project,
    },
},
{ headerMode: 'none' }
);
const HomeStack = StackNavigator({
  Signin: {
    screen: Signin,
  },
  Signup: {
    screen: Signup,
  },
  ActivateUser: {
    screen: ActivateUser,
  },
  PartnershipStack: {
    screen: PartnershipStack,
  },
  Favorite: {
    screen: Favorite,
  },
  Chat: {
    screen: Chat,
  },
  Activity: {
    screen: Activity,
  },
  Setup: {
    screen: Setup,
  },
  Notification: {
    screen: Notification,
  },
  Hotnews: {
    screen: Hotnews,
  },
  HotnewsDetail: {
    screen: HotnewsDetail,
  },
  FavoritePartnerDetail: {
    screen: FavoritePartnerDetail,
  },
  FavoriteBusinessDetail: {
    screen: FavoriteBusinessDetail,
  },
  FavoriteProjectDetail: {
    screen: FavoriteProjectDetail,
  },
  ChatDetail: {
    screen: ChatDetail,
  },
  ActivityDetail: {
    screen: ActivityDetail,
  },
  Search: {
    screen: Search,
  },
    Agreement: {
    screen: Agreement,
    },
    BasicInfo: {
    screen: BasicInfo,
    },
    AdditionalInfo: {
    screen: AdditionalInfo,
    },
    SurveyInfo: {
    screen: SurveyInfo,
    },
    TagsInfo: {
        screen: TagsInfo,
    },
    SkillsInfo: {
        screen: SkillsInfo,
    },
    SettingInfo: {
        screen: SettingInfo,
    },
    AddEmployerInfo: {
    screen: AddEmployerInfo
    },
    AddSchoolInfo: {
    screen: AddSchoolInfo
    },
    ChangeEmployerInfo: {
    screen: ChangeEmployerInfo
    },
    ChangeSchoolInfo: {
    screen: ChangeSchoolInfo
    },
},
  { headerMode: 'screen' },
);


export default HomeStack
