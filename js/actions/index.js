export const USERNAME_INPUT = 'USERNAME_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const ACTIVATE_USER = 'ACTIVATE_USER';
export const NAME_REGISTER = 'NAME_REGISTER';
export const NICKNAME_REGISTER = 'NICKNAME_REGISTER';
export const EMAIL_REGISTER = 'EMAIL_REGISTER';
export const PASSWORD1_REGISTER = 'PASSWORD1_REGISTER';
export const PASSWORD2_REGISTER = 'PASSWORD2_REGISTER';
export const COUNTRY_REGISTER = 'COUNTRY_REGISTER';
export const GENDER_REGISTER = 'GENDER_REGISTER';
export const AGE_REGISTER = 'AGE_REGISTER';
export const ROLE_REGISTER = 'ROLE_REGISTER';
export const SITUATION_REGISTER = 'SITUATION_REGISTER';
export const VISITREASON_REGISTER = 'VISITREASON_REGISTER';
export const INTRODUCTION_REGISTER = 'INTRODUCTION_REGISTER';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUPPASSWORD_FAILURE = 'SIGNUPPASSWORD_FAILURE';
export const SIGNUPUSERNAME_FAILURE = 'SIGNUPUSERNAME_FAILURE';
export const SIGNUP_MISSINGITEMS = 'SIGNUP_MISSINGITEMS';
export const CLEAN_ERROR_MESSAGE = 'CLEAN_ERROR_MESSAGE';
export const SIGNUP_PASSWORD_PATTERN_FAILURE = 'SIGNUP_PASSWORD_PATTERN_FAILURE';
export const RESEND_ACTIVATION_EMAIL = 'RESEND_ACTIVATION_EMAIL';
export const REGISTER_AGREEMENT = 'REGISTER_AGREEMENT';

export const usernameInput = (username) => {
  return {
    type: USERNAME_INPUT,
    username: username,
  };
};
export const passwordInput = (password) => {
  return {
    type: PASSWORD_INPUT,
    password: password,
  };
};
export const signinSuccess = (message) => {
  return {
    type: SIGNIN_SUCCESS,
    message: message,
  }
};
export const signinFailure = (message) => {
  return {
    type: SIGNIN_FAILURE,
    message: message,
  }
};
export const activateUser = () => {
  return{
    type: ACTIVATE_USER,
  }
};
// http://54.219.171.129
export const signin = () => {
  return (dispatch, getState) => {
    const body = {
      username: getState().username,
      password: getState().password
    }
    return fetch ('http://54.219.171.129/login/mobilelogin', { method: 'post', body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        } }).then(
      (res) => {
        //dispatch(signinSuccess('sign is sucessful'))
        return res.json();
      },
      (error) => {
        dispatch(signinFailure('连接服务器失败，请稍后重试'));
      }
    ).then((data) => {
      if (data.code === 5) {
        dispatch(signinSuccess('sign is sucessful'));
      } else if (data.code === 1) {
        dispatch(signinFailure(data.message));
      }else if (data.code === 2){
        dispatch(activateUser())
      }
    }
      )
  }
};

export const nameRegister = (realname) => {
  return {
    type: NAME_REGISTER,
      realname: realname,
  };
};
export const nicknameRegister= (nickname) => {
  return {
    type:NICKNAME_REGISTER,
      nickname:nickname,
  }
};
export const emailRegister = (email) => {
  return {
    type: EMAIL_REGISTER,
        email:email,
    }
};
export const password1Register = (password1) => {
  return {
      type: PASSWORD1_REGISTER,
      password1:password1,
  }
};
export const password2Register = (password2) => {
  return {
      type: PASSWORD2_REGISTER,
      password2: password2,
  }
};
export const countryRegister = (country) => {
  return {
    type: COUNTRY_REGISTER,
    country:country,
  }
};
export const genderRegister = (selectGender) => {
  return {
    type: GENDER_REGISTER,
    gender:selectGender,
  }
};


export const ageRegister = (selectAge) => {
    return {
        type: AGE_REGISTER,
        age:selectAge,
    }
};
export const roleRegister = (selectRole) => {
    return {
        type: ROLE_REGISTER,
        role:selectRole,
    }
};
export const situationRegister = (selectSituation) => {
    return {
        type: SITUATION_REGISTER,
        situation:selectSituation,
    }
};
export const visitReasonRegister = (selectReason) => {
    return {
        type: VISITREASON_REGISTER,
        visitReason:selectReason,
    }
};
export const introductionRegister = (introduction) => {
  return {
    type:INTRODUCTION_REGISTER,
    introduction: introduction,
  }
};
export const signupSuccess = (message) => {
    return {
        type: SIGNUP_SUCCESS,
        message: message,
    }
};
export const signupPasswordFailure = (message) => {
    return {
        type: SIGNUPPASSWORD_FAILURE,
        message: message,
    }
};
export const signupUsernameFailure = (message) => {
    return {
        type: SIGNUPUSERNAME_FAILURE,
        message: message,
    }
};
export const signupMissingItems = (message) => {
    return {
        type: SIGNUP_MISSINGITEMS,
        message: message,
    }
};
export const cleanErrorMessage = () => {
    return {
        type:CLEAN_ERROR_MESSAGE,
    }
};
export const signupPasswordPatternFailure =(message) => {
    return {
        type: SIGNUP_PASSWORD_PATTERN_FAILURE,
        message: message,
    }
};

export const signup = () => {
    return (dispatch, getState) => {
        const pattern=/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d~!@#$%^&*()]{4,}$/;
        const body = {
            realname:getState().signupInfo.realname,
            nickname:getState().signupInfo.nickname,
            email:getState().signupInfo.email,
            password1:getState().signupInfo.password1,
            password2:getState().signupInfo.password2,
            country:getState().signupInfo.country,
            gender:getState().signupInfo.gender,
            age:getState().signupInfo.age,
            role:getState().signupInfo.role,
            visitReason:getState().signupInfo.visitReason,
            situation:getState().signupInfo.situation,
            introduction:getState().signupInfo.introduction,
        }
        if(body.password1 !== body.password2){
            dispatch(signupPasswordFailure("密码不相符"))
        }else if(body.password1.match(pattern) == null || body.password2.match(pattern) == null){
            dispatch(signupPasswordPatternFailure("密码长度须>4位的大写字母，数字或符号组合"))
        }else if(!body.realname || !body.nickname || !body.email || !body.password1 || !body.password2 || !body.country || !body.introduction ){
            dispatch(signupMissingItems("所有为必填相"))
        }else{
            dispatch(cleanErrorMessage(''))
            return fetch ('http://54.219.171.129/register/mobileapp', { method: 'post',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    } }).then(
                    (res) => {
                    return res.json();
        },
            (error) => {
                dispatch(signupFailure('连接服务器失败，请稍后重试'));
            }
        ).then((data) => {
                if (data.code === 5) {
                dispatch(signupSuccess());
            } else if(data.code === 1) {
                dispatch(signupUsernameFailure('此用户已注册'));
            }
         }
        )
        }
    }
};
export const registerAgreement = () => {
    return {
        type: REGISTER_AGREEMENT
    }
}

// export const resendActivationEmail = () => {
//     return (dispatch, getState) => {
//         const body = {
//             username: getState().username,
//         }
//         return fetch ('http://54.219.171.129/login/mobilelogin', { method: 'post', body: JSON.stringify(body),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 } }).then(
//                 (res) => {
//                 return res.json();
//     },
//         (error) => {
//             dispatch(signinFailure('连接服务器失败，请稍后重试'));
//         }
//     ).then((data) => {
//             if (data.code === 5) {
//             dispatch(signinSuccess());
//         }
//     }
//     )
//     }
// };



