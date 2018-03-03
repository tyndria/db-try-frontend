import request from '../../utils/request';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const login = (data) => ({
  type: LOGIN,
  payload: data
});

export const logout = (data) => ({
  type: LOGOUT,
  payload: data
});

const DEFAULT_STATE = {
  currentUser: null
};

export const registerUser = (email, password) => {
  return (dispatch) => {
    return request.fetch('/api/auth/register', 'POST', {email, password}).then((data) => {
      dispatch({
        type: REGISTER_USER,
        payload: data
      });
    });
  };
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case REGISTER_USER:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};