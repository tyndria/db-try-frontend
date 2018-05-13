import request from '../../utils/request';

export const RUN_PROJECT = 'RUN_PROJECT';
export const RUN_PROJECT_SUCCESS = 'RUN_PROJECT_SUCCESS';

export const runProject = (projectId) => {
  return (dispatch, getState) => {
  	const configs = getState().schemasConfiguration[projectId];
  	dispatch({type: RUN_PROJECT});
    return request.fetch(`/api/projects/run/${projectId}`, 'POST', configs).then((data) => {
      dispatch({type: RUN_PROJECT_SUCCESS, payload: data});
    });
  };
};


const DEFAULT_STATE = {
	data: []
};

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case RUN_PROJECT: {
			return {...state, data: []};
		}
		case RUN_PROJECT_SUCCESS:
			return {...state, data: action.payload};
		default:
			return state;
	}
};