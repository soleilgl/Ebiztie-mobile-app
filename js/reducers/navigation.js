import AppNavigator from '../AppNavigator';
import { SIGNIN_SUCCESS, ACTIVATE_USER, } from '../actions';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Signin'));

const navReducer = (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case SIGNIN_SUCCESS:
    nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'PartnershipStack' }),
     state);
     break;
     case ACTIVATE_USER:
     nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ActivateUser' }),
      state);
      break;
      default:
    nextState = AppNavigator.router.getStateForAction(action, state);
    break;
  }
  return nextState || state;
};
export default navReducer
