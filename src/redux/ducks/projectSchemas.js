import uuidv4 from 'uuid/v4';

export const GET_SCHEMAS = 'GET_SCHEMAS';
export const DELETE_SCHEME = 'DELETE_SCHEME';
export const ADD_EMPTY_SCHEME = 'ADD_EMPTY_SCHEME';

const DEFAULT_STATE = {
	schemas: {
		1: {
			name: 'dog',
			fields: {
				'1': {
					name: 'name',
					type: 'string'
				},
				'2': {
					name: 'age',
					type: 'number'
				}
			}
		},
		2: {
			name: 'cat',
			fields: {
				'1': {
					name: 'name',
					type: 'string'
				},
				'2': {
					name: 'age',
					type: 'number'
				}
			}
		}
	}
};

const EMPTY_SCHEME = {
	name: '',
	fields: {
		1: {
			name:'',
			type: ''
		}
	}
};

export const deleteScheme = (id) => ({
	type: DELETE_SCHEME,
	id: id
});

export const addEmptyScheme = () => ({
	type: ADD_EMPTY_SCHEME
});

export default (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case DELETE_SCHEME:
			const {[action.id]: removed, ...updatedSchemas} = state.schemas;
			return {state, ...{schemas: updatedSchemas}};
		case ADD_EMPTY_SCHEME:
			return {
				schemas: {...state.schemas, [uuidv4()]:EMPTY_SCHEME }
			};
		default:
			return state;
	}
};
