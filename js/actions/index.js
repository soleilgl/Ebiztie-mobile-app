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
export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const SAVE_ALL_PARTNERS_INFO = 'SAVE_ALL_PARTNERS_INFO';
export const SAVE_ALL_BUSINESS_INFO = 'SAVE_ALL_BUSINESS_INFO';
export const SAVE_ALL_PROJECTS_INFO = 'SAVE_ALL_PROJECTS_INFO';
export const PARTNER_DETAIL_PARTNER = 'PARTNER_DETAIL_PARTNER';
export const MORE_PARTNER_INFO = 'MORE_PARTNER_INFO';
export const GET_ALL_BUSINESS = 'GET_ALL_BUSINESS';
export const GET_ALL_PROJECT = 'GET_ALL_PROJECT';
export const GET_BUSINESS_DETAIL_INFO = 'GET_BUSINESS_DETAIL_INFO';
export const GET_PROJECT_DETAIL_INFO = 'GET_PROJECT_DETAIL_INFO';
export const SAVE_MY_INFO = 'SAVE_MY_INFO';
export const CHANGE_MY_BASIC_INFO = 'CHANGE_MY_BASIC_INFO';
export const CHANGE_MY_ADDITIONAL_INFO = 'CHANGE_MY_ADDITIONAL_INFO';
export const CHANGE_MY_SURVEY_INFO = 'CHANGE_MY_SURVEY_INFO';
export const CHANGE_MY_TAGS_INFO = 'CHANGE_MY_TAGS_INFO';
export const CHANGE_MY_SKILLS_INFO = 'CHANGE_MY_SKILLS_INFO';
export const CHANGE_MY_SETTING_INFO = 'CHANGE_MY_SETTING_INFO';
export const ADD_MY_EMPLOYER_INFO = 'ADD_MY_EMPLOYER_INFO';
export const ADD_MY_SCHOOL_INFO = 'ADD_MY_SCHOOL_INFO';
export const CHANGE_MY_EMPLOYER_INFO = 'CHANGE_MY_EMPLOYER_INFO';
export const CHANGE_MY_SCHOOL_INFO = 'CHANGE_MY_SCHOOL_INFO';


// use when user input ID to log in
export const usernameInput = (username) => {
  return {
    type: USERNAME_INPUT,
    username: username,
  };
};

// use when user input PW to log in
export const passwordInput = (password) => {
  return {
    type: PASSWORD_INPUT,
    password: password,
  };
};

// use when user log in successful
export const signinSuccess = (message) => {
  return {
    type: SIGNIN_SUCCESS,
    message: message,
  }
};

// use when user log in failed
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
// when user click signin button, this handles an async action. first to collect sign-in info second to talk to backend
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
      }).then((data) => {
            if (data.code === 5) {
            dispatch(signinSuccess('sign is sucessful'));
        } else if (data.code === 1) {
            dispatch(signinFailure(data.message));
        }else if (data.code === 2){
            dispatch(activateUser())
        }
    }).catch((error) => {
        dispatch(signinFailure('???????????????????????????????????????'));
      }
    )
  }
};

// use to collect user sign-up info
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

//when sign-up successful
export const signupSuccess = (message) => {
    return {
        type: SIGNUP_SUCCESS,
        message: message,
    }
};
//when sign-up failed
export const signupPasswordFailure = (message) => {
    return {
        type: SIGNUPPASSWORD_FAILURE,
        message: message,
    }
};
//when user name is already existed, this action will be called
export const signupUsernameFailure = (message) => {
    return {
        type: SIGNUPUSERNAME_FAILURE,
        message: message,
    }
};

//when there is missing items need to be filled, this action will be called
export const signupMissingItems = (message) => {
    return {
        type: SIGNUP_MISSINGITEMS,
        message: message,
    }
};

//this action will clean up all Error Message displayed on the signin and signup UI
export const cleanErrorMessage = () => {
    return {
        type:CLEAN_ERROR_MESSAGE,
    }
};

//when the password that user input doesn;t match the requirement, this action will be called
export const signupPasswordPatternFailure =(message) => {
    return {
        type: SIGNUP_PASSWORD_PATTERN_FAILURE,
        message: message,
    }
};


// when user click signup button, this handles an async action. first to collect sign-up info second to talk to backend
//when all required info all inputted, and successfully sumit the request, signupSuccess action will clear all itmes and return initial state
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
            dispatch(signupPasswordFailure("???????????????"))
        }else if(body.password1.match(pattern) == null || body.password2.match(pattern) == null){
            dispatch(signupPasswordPatternFailure("???????????????>4??????????????????????????????????????????"))
        }else if(!body.realname || !body.nickname || !body.email || !body.password1 || !body.password2 || !body.country || !body.introduction ){
            dispatch(signupMissingItems("??????????????????"))
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
                dispatch(signinFailure('???????????????????????????????????????'));
            }
        ).then((data) => {
                if (data.code === 5) {
                dispatch(signupSuccess());
            } else if(data.code === 1) {
                dispatch(signupUsernameFailure('??????????????????'));
            }
         }
        )
        }
    }
};

//durning signup process, used when user needs to review sign-up agreement, it will call navigation reducer to display the UI
export const registerAgreement = () => {
    return {
        type: REGISTER_AGREEMENT
    }
}

//called to display pic on UI by using awsURL
export const changeAvatar = (data) => {
    //noinspection JSAnnotator
    return {
        type: CHANGE_AVATAR,
        avatarsource : data.url
    }
}
const saveAvartarURL = (url) => {
    return (dispatch, getState) => {
         fetch (`http://54.219.171.129/api/private/profile/profileIcon?purpose=profile-logo&url=${url}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(
            (res) => {
            return res.json();
            //awsUrl={url:https://userpictureebiztie.s3-us-west-1.amazonaws.com/7152d1028806e3780b3f996b6076950d.jpg?AWSAccessKeyId=AKIAJVA3NAQYBKGDIZAA&Expires=1500055895&Signature=zOaxkVU78hSZjbpD7lNOueF%2FcCU%3D}
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }
    ).then((data) => {
            dispatch (changeAvatar(data));
    })
    }
}
// setup page
//when user needs to upload image on profile page, this will call a asyc function,
// first, select pic from phone album or use camera to take a new picture, an URI will be generated by Event handler(handleImageUpload)
// second, send this pic to AWS and get an URL(...jpg) back by a post call
//third, use the URL from AWS to get the awsurl(https://...). Dao will figure out shall create a new filename or replace the old one by checking user ID
//meantime,the awsurl will be returned to the front as image source to display new picture
export const uploadImageRegister = (source) => {
    return (dispatch, getState) => {
        const file = {
            uri: source.uri.uri,
            name: source.fileName,
            type: 'image/jpg',
        }

        const body = new FormData();
        body.append('file', file);
        const config = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'multipart/form-data;',file upload content-type
                //'Content-Type': 'application/json',can not use for android bug
            },
            body: body,
        }
        fetch ('http://54.219.171.129/api/private/uploadFiles/profile', config).then(
                (res) => {
                return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }
    ).then((data) => {
            console.log("data is" + data)
        console.log("url is" + data.url)
            dispatch(saveAvartarURL(data.url));
            //data is an object {url:e888d480170a154137cf02e57a8347f0.jpg}
        })
    }
}

//setup page
//use on componentWillMount
// after user login, get user pic by using user ID
export const getProfileImage = () => {
    return (dispatch, getState) => {
        fetch('http://54.219.171.129/api/private/profile/pictures',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(
            (res) => {
            return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }

    ).then((imagedata) => {
            const profileLogoArray = imagedata["profile-logo"];
            dispatch (changeAvatar(profileLogoArray [0]));
    })

    }
}
const saveAllPartnersInfo = (data) => {
    return {
        type: SAVE_ALL_PARTNERS_INFO,
        allPartnersInfo: data
    }
}

const saveAllBusinessInfo = (data) => {
    return {
        type: SAVE_ALL_BUSINESS_INFO,
        allBusinessInfo: data
    }
}
const saveAllProjectsInfo = (data) => {
    return {
        type: SAVE_ALL_PROJECTS_INFO,
        allProjectsInfo: data
    }
}

//homepage
//get all partners info
export const getAllPartnersInfo = () => {
    return (dispatch, getState) => {
    fetch('http://54.219.171.129/api/private/recommendation/newElites/mobileapp',{
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    }).then(
        (res) => {``
        return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }

    ).then((data) => {
        dispatch (saveAllPartnersInfo(data));
    })
    }
}
//homepage
//get all businesses info
export const getAllBusinessInfo = () => {
    return (dispatch, getState) => {
        fetch('http://54.219.171.129/api/private/recommendation/newBusinesses/mobileapp',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }

    ).then((data) => {
            dispatch (saveAllBusinessInfo(data));
    })
    }
}
//homepage
//get all projects info
export const getAllProjectsInfo = () => {
    return (dispatch, getState) => {
        fetch('http://54.219.171.129/api/private/recommendation/newProjects/mobileapp',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(
            (res) => {
            return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }

    ).then((data) => {
            dispatch (saveAllProjectsInfo(data));
    })
    }
}
const partnerDetail_Partner = (data) => {
    return {
        type:PARTNER_DETAIL_PARTNER,
        partnerInfo:data
    }
}
//partner detail page
//get individual partner info
//also push item info from home page to data to reuse user_id, icon (awsURL) and ect
export const getPartnerInfo = (item) => {
    return (dispatch, getState) => {
        fetch(`http://54.219.171.129/api/private/partners/${item.user_id}/profile`,{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(
            (res) => {
            return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }

    ).then((data) => {
            data.basicInfo= item
            dispatch (partnerDetail_Partner(data));
    })
    }
}

const getMorePartnerDetailInfo = (morePartnerDetailInfo) => {
    return {
        type:MORE_PARTNER_INFO,
        data: morePartnerDetailInfo
    }
}

//partnerdetail page
//use promise to get all results (survey, businesses)back and put in state.moremorePartnerDetailInfo
export const getMorePartnerInfo = (user_id) => {
    return (dispatch, getState) => {
        const fetchSurvey = fetch(`http://54.219.171.129/api/private/partners/${user_id}/thought`,{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchBusinesses = fetch(`http://54.219.171.129/api/private/partners/${user_id}/businesses`,{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchProject = fetch(`http://54.219.171.129/api/private/partners/${user_id}/project`,{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        return Promise.all([ fetchSurvey, fetchBusinesses, fetchProject]).then((values) => {
            const morePartnerDetailInfo = {
                survey: values[0],
                businesses: values[1],
                project: values[2],
            };
            dispatch(getMorePartnerDetailInfo(morePartnerDetailInfo));
        }).catch((err) => {dispatch(signinFailure('???????????????????????????????????????'));});
    }
}
export const getAllBusiness = () => {
    return {
        type:GET_ALL_BUSINESS,
    }
}
export const getAllProject = () => {
    return {
        type:GET_ALL_PROJECT,
    }
}
const getBusinessDetailInfo = (data) => {
    return {
        type:GET_BUSINESS_DETAIL_INFO,
        data: data
    }
}
export const getBusinessInfo = (item) => {
    return(dispatch, getState) => {
        fetch(`http://54.219.171.129/api/private/businesses/${item.id}`,{
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    }).then(
        (res) => {
        return res.json();
},
    (error) => {
        dispatch(signinFailure('???????????????????????????????????????'));
    }

).then((data) => {
        data.basicInfo= item
    dispatch (getBusinessDetailInfo(data));
})
    }
}
const getProjectDetailInfo = (data) => {
    return {
        type:GET_PROJECT_DETAIL_INFO,
        data: data
    }
}
export const getProjectInfo = (item) => {
    return(dispatch, getState) => {
        fetch(`http://54.219.171.129/api/private/projects/${item.id}`,{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(
            (res) => {
            return res.json();
    },
        (error) => {
            dispatch(signinFailure('???????????????????????????????????????'));
        }

    ).then((data) => {
            data.basicInfo= item
        dispatch (getProjectDetailInfo(data));
    })
    }
}
const saveMyInfo =(myInfo) => {
    return {
        type:SAVE_MY_INFO,
        data:myInfo
    }
}

export const getMyInfo = () => {
    return (dispatch, getState) => {
        const fetchBasicInfo = fetch('http://54.219.171.129/api/private/profile/basic',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchAdditionalInfo = fetch('http://54.219.171.129/api/private/profile/supplement',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchSurvey = fetch('http://54.219.171.129/api/private/thought',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchTags = fetch('http://54.219.171.129/api/private/profile/tags',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchSkills = fetch('http://54.219.171.129/api/private/profile/skills',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        const fetchSetting = fetch('http://54.219.171.129/api/private/profile/setting',{
            method: 'get',
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json()
        });
        return Promise.all([ fetchBasicInfo, fetchAdditionalInfo, fetchSurvey, fetchTags, fetchSkills, fetchSetting]).then((values) => {
                const myInfo = {
                    myBasicInfo: values[0],
                    myAdditionalInfo: values[1],
                    mySurvey: values[2],
                    myTags: values[3],
                    mySkills: values[4],
                    mySetting: values[5],
                };
        dispatch(saveMyInfo(myInfo));
    }).catch((err) => {dispatch(signinFailure('???????????????????????????????????????'));});
    }
}
export const changeMyBasicInfo = () => {
    return {
        type:CHANGE_MY_BASIC_INFO,
    }
}
export const nicknameChange = (new_nickname) => {
    return {
        type:NICKNAME_CHANGE,
        new_nickname:new_nickname,
    }
}
// export const saveNewBasicInfo = () => {
//     return (dispatch, getState) => {
//         const body = {
//             realname:getState().new_basicInfo.realname,
//         }
//         return fetch ('http://54.219.171.129/api/private/profile/basic', {
//             method: 'put',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }).then(
//             (res) => {
//             return res.json()
//             },
//         (error) => {
//             dispatch(signinFailure('???????????????????????????????????????'));
//         }
//     )
//         }
// };
export const changeMyAdditionalInfo = () => {
    return {
        type:CHANGE_MY_ADDITIONAL_INFO,
    }
}
export const changeMySurveyInfo = () => {
    return {
        type:CHANGE_MY_SURVEY_INFO,
    }
}
export const changeMyTagsInfo = () => {
    return {
        type:CHANGE_MY_TAGS_INFO,
    }
}
export const changeMySkills = () => {
    return {
        type:CHANGE_MY_SKILLS_INFO,
    }
}
export const changeMySetting = () => {
    return {
        type:CHANGE_MY_SETTING_INFO,
    }
}
export const addMyEmployerInfo = () => {
    return{
        type:ADD_MY_EMPLOYER_INFO,
    }
}
export const addSchoolInfo = () => {
    return{
        type:ADD_MY_SCHOOL_INFO,
    }
}
export const changeMyEmployerInfo = (item) => {
    return{
        type:CHANGE_MY_EMPLOYER_INFO
    }
}
export const changeMySchoolInfo = (item) => {
    return{
        type:CHANGE_MY_SCHOOL_INFO
    }
}





