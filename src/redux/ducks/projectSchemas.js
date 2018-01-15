import uuidv4 from 'uuid/v4';
import { combineReducers } from 'redux';

export const GET_SCHEMAS = 'GET_SCHEMAS';
export const DELETE_SCHEME = 'DELETE_SCHEME';
export const ADD_EMPTY_SCHEME = 'ADD_EMPTY_SCHEME';
export const ADD_EMPTY_FIELD = 'ADD_EMPTY_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';

const DEFAULT_STATE = {
	schemas: {
		1: {
			name: 'dog'
		},
		2: {
			name: 'cat'
		}
	},
	fields: {
		1: {
			'1': {
				name: 'name',
				type: 'string'
			},
			'2': {
				name: 'age',
				type: 'number'
			}
		},
		2: {
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
};

const EMPTY_FIELD = {
	name: '',
	type: ''
};

const EMPTY_SCHEME = {
	name: ''
};

export const deleteScheme = (id) => ({
	type: DELETE_SCHEME,
	id: id
});

export const addEmptyScheme = () => ({
	type: ADD_EMPTY_SCHEME
});

export const addEmptyField = (schemeId) => ({
	type: ADD_EMPTY_FIELD,
	schemeId
});

export const deleteField = (schemeId, fieldId) => ({
	type: DELETE_FIELD,
	schemeId,
	fieldId
});

const schemas = (state = DEFAULT_STATE.schemas, action) => {
	switch(action.type) {
		case DELETE_SCHEME:
			const {[action.id]: removedScheme, ...updatedSchemas} = state;
			return updatedSchemas;
		case ADD_EMPTY_SCHEME:
			return {...state, [uuidv4()]: EMPTY_SCHEME};
		default:
			return state;
	}
};

const fields = (state = DEFAULT_STATE.fields, action) => {
	let updatedFields;
	switch(action.type) {
		case ADD_EMPTY_FIELD:
			updatedFields = {...state[action.schemeId], [uuidv4()]:EMPTY_FIELD};
			return {...state, [action.schemeId]: updatedFields};
		case DELETE_FIELD:
			let {[action.fieldId]: removedField, ...updatedFields} = state[action.schemeId];
			return {...state, [action.schemeId]: updatedFields};
		default:
			return state;
	}
};

export default combineReducers({
	schemas,
	fields
});
