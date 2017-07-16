
import { combineReducers } from 'redux';

import password from './signin_password';
import username from './signin_username';
import navigation from './navigation';
import signin from './signin';
import signupErrorMessage from './signup';
import signupInfo from './signup_info';
import avatarSource from './avatar';


export default combineReducers({
  password,
  username,
  navigation,
  signin,
  signupInfo,
  signupErrorMessage,
  avatarSource,
});
