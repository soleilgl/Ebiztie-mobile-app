import { SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';
import AppNavigator from '../AppNavigator';
import navReducer from './navigation';

const initialState = '';

export default function signin(state = initialState, action ){
  switch (action.type) {
    case SIGNIN_FAILURE:
      return action.message;
    default: return state;
  }
}
