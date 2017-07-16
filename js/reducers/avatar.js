import { CHANGE_AVATAR } from '../actions';
import AppNavigator from '../AppNavigator';
import navReducer from './navigation';

const userphoto = require('../../img/user-pic.png');
const initialState = 'https://facebook.github.io/react/img/logo_og.png';
// const initialState = userphoto
export default function avatarSource(state = initialState, action ){
    switch (action.type) {
        case CHANGE_AVATAR:
            return action.avatarsource;
        default: return state;
    }
}