import request from '../../utils/request';
import {SUCCESS, FAILURE, REQUEST} from '../constants';

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER_USER';
const LOGOUT = 'LOGOUT';

export const REGISTER_USER_FAILURE = `${REGISTER}_${FAILURE}`;
export const REGISTER_USER_SUCCESS = `${REGISTER}_${SUCCESS}`;
export const LOGIN_SUCCESS = `${LOGIN}_${SUCCESS}`;
export const LOGIN_FAILURE = `${LOGIN}_${FAILURE}`;
export const LOGOUT_SUCCESS = `${LOGOUT}_${SUCCESS}`;

const DEFAULT_STATE = {
	user: null,
	error: null
};

export const registerUserSuccess = (data) => ({
	type: REGISTER_USER_SUCCESS,
	payload: data
});

export const registerUserFailure = (data) => ({
	type: REGISTER_USER_FAILURE,
	payload: data
});

export const registerUser = (email, password) => {
	return (dispatch) => {
		return request.fetch('/api/auth/register', 'POST', {email, password}).then((data) => {
			dispatch(registerUserSuccess(data));
		}, (err) => dispatch(registerUserFailure()));
	};
};

export const logOut = () => {
	return (dispatch) => {
		return request.fetch('/api/auth/logout', 'GET').then((data) => {
			dispatch({
				type: LOGOUT_SUCCESS,
				payload: data
			});
		});
	};
};

export const loginUser = (email, password) => {
	return (dispatch) => {
		return request.fetch('/api/auth/login', 'POST', {email, password}).then((data) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: data
			});
		}, (err) => dispatch({
			type: LOGIN_FAILURE,
			payload: err
		}));
	};
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
		case REGISTER_USER_SUCCESS:
			return {...state, user: action.payload, error: null};
		case LOGIN_FAILURE:
		case REGISTER_USER_FAILURE:
			return {...state, error: action.payload};
		case LOGOUT_SUCCESS:
			return {...state, error: null, user: null};
		default:
			return state;
	}
};


