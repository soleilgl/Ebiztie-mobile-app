export const USERNAME_INPUT = 'USERNAME_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';
export const ACTIVATE_USER = 'ACTIVATE_USER';

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
export const signinFailure = (code) => {
  return {
    type: SIGNIN_FAILURE,
    responseCode: code,
  }
};
export const activateUser = () => {
  return{
    type: ACTIVATE_USER,
  }
}
// http://54.219.171.129
export const signin = () => {
  return (dispatch, getState) => {
    const body = {
      username: getState().username,
      password: getState().password
    }
    return fetch ('http://localhost:5000/login/mobilelogin', { method: 'post',
         body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        } }).then(
      (res) => {
        //dispatch(signinSuccess('sign is sucessful'))
        return res.json();
      },
      (error) => {
        dispatch(signinFailure('sign failed'));
      }
    ).then((data) => {
      if (data.code === 5) {
        dispatch(signinSuccess('sign is sucessful'));
      } else if (data.code === 1) {
        dispatch(signinFailure(data.code));
      }else if (data.code === 2){
        dispatch(activateUser())
      }
    }
      )
  }
};
