import { CHANGE_AVATAR } from '../actions';
import AppNavigator from '../AppNavigator';
import navReducer from './navigation';

const userphoto = require('../../img/user-pic.png');
const initialState = 'https://s3-us-west-1.amazonaws.com/userpictureebiztie/defaultuser.jpg';
// const initialState = userphoto
export default function avatarSource(state = initialState, action ){
    switch (action.type) {
        case CHANGE_AVATAR:
            return action.avatarsource;
        default: return state;
    }
}