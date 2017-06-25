import { SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';
import AppNavigator from '../AppNavigator';
import navReducer from './navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Signin'));

export default function signin(state = initialState, action ){
  switch (action.type) {
    // case SIGNIN_SUCCESS:
    //   const PartnershipStack = AppNavigator.router.getActionForPathAndParams('PartnershipStack');
    //   // return AppNavigator.router.getStateForAction(PartnershipStack, state);
    //   return navReducer(state, PartnershipStack);
    case SIGNIN_FAILURE:
      return action.responseCode;
    default: return state;
  }
}
