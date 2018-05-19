import request from '../../utils/request';

export const REQUEST_LOGS = 'REQUEST_LOGS';
export const RECEIVE_LOGS = 'RECEIVE_LOGS';

const DEFAULT_STATE = {
  data: []
};

export const getLogs = (projectId) => {
  return (dispatch, ) => {
    dispatch({type: REQUEST_LOGS});
    return request.fetch(`/api/logs/${projectId}`, 'GET').then((data) => {
      dispatch({type: RECEIVE_LOGS, payload: data});
    });
  };
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RECEIVE_LOGS:
      return {
        data: action.payload
      };
    default:
      return state;
  }
};