import uuidv4 from 'uuid/v4';

export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';

const DEFAULT_STATE = {
	projects: [{name: 'personal', id: '345345'}, {name: 'city', id: '4567457'}]
};

export const addProject = (name) => ({
	type: ADD_PROJECT,
	payload: name
});

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case ADD_PROJECT:
			return {
				projects: [...state.projects, ...[{name: action.payload, id: uuidv4()}]]
			};

		default:
			return state;
	}
};