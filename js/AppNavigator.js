
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
},
  { headerMode: 'screen' },
);


export default HomeStack
