
import { combineReducers } from 'redux';

import password from './signin_password';
import username from './signin_username';
import navigation from './navigation';
import signin from './signin';
import signupErrorMessage from './signup';
import signupInfo from './signup_info';
import avatarSource from './avatar';
import allPartnersInfo from './allPartners';
import allBusinessInfo from './allBusiness';
import allProjectsInfo from './allProjects';
import partnerDetailInfo from './partnerDetail';
import morePartnerDetailInfo from './morePartnerDetail';
import businessDetailInfo from './businessDetail';
import projectDetailInfo from './projectDetail';



export default combineReducers({
  password,
  username,
  navigation,
  signin,
  signupInfo,
  signupErrorMessage,
  avatarSource,
  allPartnersInfo,
  allBusinessInfo,
  allProjectsInfo,
  partnerDetailInfo,
  morePartnerDetailInfo,
  businessDetailInfo,
  projectDetailInfo,
});
