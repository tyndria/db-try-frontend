import request from '../../utils/request';
import {getUserId} from './users';

export const FETCH_ALL = 'FETCH_ALL';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';

const DEFAULT_STATE = {
  projects: []
};

export const fetchAll = () => {
  return (dispatch, getState) => {
    const userId = getUserId(getState());
    return request.fetch(`/api/projects/${userId}`).then((data) => {
      dispatch({type: RECEIVE_PROJECTS, payload: data});
    });
  };
};

export const addProject = (name) => {
  return (dispatch, getState) => {
    const user = getUserId(getState());
    return request.fetch('/api/projects', 'POST', {name, user}).then((data) => {
      dispatch({type: ADD_PROJECT, payload: data});
    });
  };
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return {
        projects: action.payload
      };
    case ADD_PROJECT:
      return {
        projects: [...state.projects, ...[action.payload]]
      };
    default:
      return state;
  }
};