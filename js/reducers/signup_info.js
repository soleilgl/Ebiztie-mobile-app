import { AGE_REGISTER, COUNTRY_REGISTER, EMAIL_REGISTER, GENDER_REGISTER, INTRODUCTION_REGISTER, NICKNAME_REGISTER, PASSWORD1_REGISTER, PASSWORD2_REGISTER,NAME_REGISTER, ROLE_REGISTER, SITUATION_REGISTER, VISITREASON_REGISTER, SIGNUP_SUCCESS } from '../actions'
const initialState = {
    age:"1",
    country: '',
    email: '',
    gender: '1',
    introduction: '',
    nickname: '',
    password1: '',
    password2: '',
    realname: '',
    role: '企业家',
    situation: '1',
    visitReason: '1',
};
export default function signupInfo(state = initialState, action ){
    switch (action.type) {
        case AGE_REGISTER:
            return { ...state, age:action.age };
        case COUNTRY_REGISTER:
            return { ...state, country:action.country };
        case EMAIL_REGISTER:
            return { ...state, email:action.email };
        case GENDER_REGISTER:
            return { ...state, gender:action.gender };
        case INTRODUCTION_REGISTER:
            return { ...state, introduction:action.introduction };
        case NICKNAME_REGISTER:
            return { ...state, nickname:action.nickname };
        case PASSWORD1_REGISTER:
            return { ...state, password1:action.password1 };
        case PASSWORD2_REGISTER:
            return { ...state, password2:action.password2 };
        case NAME_REGISTER:
            return { ...state, realname:action.realname };
        case ROLE_REGISTER:
            return { ...state, role:action.role };
        case SITUATION_REGISTER:
            return { ...state, situation:action.situation };
        case VISITREASON_REGISTER:
            return { ...state, visitReason:action.visitReason };
         case SIGNUP_SUCCESS:
             return initialState;
        default: return state;
    }
}