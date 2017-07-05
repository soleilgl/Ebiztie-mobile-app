import { SIGNUPPASSWORD_FAILURE, SIGNUPUSERNAME_FAILURE, SIGNUP_MISSINGITEMS, CLEAN_ERROR_MESSAGE, SIGNUP_PASSWORD_PATTERN_FAILURE } from '../actions';
import AppNavigator from '../AppNavigator';
import navReducer from './navigation';

const initialState = '';

export default function signupErrorMessage(state = initialState, action ){
    switch (action.type) {
        case SIGNUPPASSWORD_FAILURE:
            return action.message;
        case SIGNUPUSERNAME_FAILURE:
            return action.message;
        case SIGNUP_MISSINGITEMS:
            return action.message;
        case CLEAN_ERROR_MESSAGE:
            return '';
        case SIGNUP_PASSWORD_PATTERN_FAILURE:
            return action.message;
        default: return state;
    }
}
