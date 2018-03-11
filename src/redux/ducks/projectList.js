import request from '../../utils/request';

export const FETCH_ALL = 'FETCH_ALL';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';
export const RUN_PROJECT = 'RUN_PROJECT';

const DEFAULT_STATE = {
  projects: []
};

export const fetchAll = () => {
  return (dispatch) => {
    return request.fetch('/api/projects').then((data) => {
      dispatch({type: RECEIVE_PROJECTS, payload: data});
    });
  };
};

export const addProject = (name) => {
  return (dispatch) => {
    return request.fetch('/api/projects', 'POST', {name}).then((data) => {
      dispatch({type: ADD_PROJECT, payload: data});
    });
  };
};

export const runProject = (projectId) => {
  return (dispatch) => {
    return request.fetch(`/api/projects/run/${projectId}`, 'GET').then((data) => {
      dispatch({type: RUN_PROJECT, payload: data});
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
    case RUN_PROJECT:
      console.log('WAS RUN', action.payload);
      return state;
    default:
      return state;
  }
};