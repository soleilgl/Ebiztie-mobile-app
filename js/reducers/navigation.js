import AppNavigator from '../AppNavigator';
import { SIGNIN_SUCCESS, ACTIVATE_USER, SIGNUP_SUCCESS, REGISTER_AGREEMENT, PARTNER_DETAIL_PARTNER, GET_ALL_BUSINESS, GET_ALL_PROJECT, GET_BUSINESS_DETAIL_INFO, GET_PROJECT_DETAIL_INFO, SAVE_MY_INFO, CHANGE_MY_BASIC_INFO, CHANGE_MY_ADDITIONAL_INFO, CHANGE_MY_SURVEY_INFO, CHANGE_MY_TAGS_INFO, CHANGE_MY_SKILLS_INFO, CHANGE_MY_SETTING_INFO, ADD_MY_EMPLOYER_INFO, ADD_MY_SCHOOL_INFO, CHANGE_MY_EMPLOYER_INFO, CHANGE_MY_SCHOOL_INFO} from '../actions';
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
      case SIGNUP_SUCCESS:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Signin' }),
              state);
      break;
      case REGISTER_AGREEMENT:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Agreement' }),
              state);
      break;
      case PARTNER_DETAIL_PARTNER:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'PartnerDetail' }),
              state);
      break;
      case GET_ALL_BUSINESS:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Business' }),
              state);
      break;
      case GET_ALL_PROJECT:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Project' }),
              state);
      break;
      case GET_BUSINESS_DETAIL_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'BusinessDetail' }),
              state);
      break;
      case GET_PROJECT_DETAIL_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ProjectDetail' }),
              state);
      break;
      case SAVE_MY_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Setup' }),
              state);
      break;
      case CHANGE_MY_BASIC_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'BasicInfo' }),
              state);
      break;
      case CHANGE_MY_ADDITIONAL_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'AdditionalInfo' }),
              state);
      break;
      case CHANGE_MY_SURVEY_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'SurveyInfo' }),
              state);
      break;
      case CHANGE_MY_TAGS_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'TagsInfo' }),
              state);
      break;
      case CHANGE_MY_SKILLS_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'SkillsInfo' }),
              state);
      break;
      case CHANGE_MY_SETTING_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'SettingInfo' }),
              state);
      break;
      case ADD_MY_EMPLOYER_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'AddEmployerInfo' }),
              state);
      break;
      case ADD_MY_SCHOOL_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'AddSchoolInfo' }),
              state);
      break;
      case CHANGE_MY_EMPLOYER_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ChangeEmployerInfo' }),
              state);
      break;
      case CHANGE_MY_SCHOOL_INFO:
          nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'ChangeSchoolInfo' }),
              state);
          break;

      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
  }
  return nextState || state;
};
export default navReducer
