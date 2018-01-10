export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const DEFAULT_STATE = {
	projects: [{name: 'personal', id: '345345'}, {name: 'city', id: '4567457'}]
};

export const fetchProjects = (data) => ({
	type: FETCH_PROJECTS,
	payload: data
});

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case FETCH_PROJECTS:
			return action.payload;
		default:
			return state;
	}
};