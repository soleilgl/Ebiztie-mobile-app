
import { combineReducers } from 'redux';

import password from './signin_password';
import username from './signin_username';
import navigation from './navigation';
import signin from './signin';

export default combineReducers({
  password,
  username,
  navigation,
  signin,
});
