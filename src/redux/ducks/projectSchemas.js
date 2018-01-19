import uuidv4 from 'uuid/v4';
import { combineReducers } from 'redux';

export const DELETE_SCHEME = 'DELETE_SCHEME';
export const ADD_EMPTY_SCHEME = 'ADD_EMPTY_SCHEME';
export const SAVE_SCHEME = 'SAVE_SCHEME';
export const ADD_EMPTY_FIELD = 'ADD_EMPTY_FIELD';
export const DELETE_FIELD = 'DELETE_FIELD';
export const UPDATE_FIELD = 'UPDATE_FIELD';

const DEFAULT_STATE = {
	schemas: {},
	fields: {}
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

export const updateField = (schemeId, fieldId, field) => ({
	type: DELETE_FIELD,
	schemeId,
	fieldId,
	field
});

export const saveScheme = (id, name, fields) =>({
	type: SAVE_SCHEME,
	schemeId: id,
	name,
	fields
});

const schemas = (state = DEFAULT_STATE.schemas, action) => {
	switch(action.type) {
		case DELETE_SCHEME:
			const {[action.id]: removedScheme, ...updatedSchemas} = state;
			return updatedSchemas;
		case ADD_EMPTY_SCHEME:
			return {...state, [uuidv4()]: EMPTY_SCHEME};
		case SAVE_SCHEME:
			return {...state, [action.schemeId]: {name: action.name} };
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
		case UPDATE_FIELD:
			return {...state, [action.schemeId]: {...state[action.schemeId], [action.fieldId]: action.field }};
		case SAVE_SCHEME:
			return {...state, [action.schemeId]: action.fields};
		default:
			return state;
	}
};

export default combineReducers({
	schemas,
	fields
});
