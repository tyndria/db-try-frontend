import uuidv4 from 'uuid/v4';
import { createSelector } from 'reselect'
import { combineReducers } from 'redux';

import request from '../../utils/request';

export const DELETE_SCHEME = 'DELETE_SCHEME';
export const ADD_EMPTY_SCHEME = 'ADD_EMPTY_SCHEME';
export const SAVE_SCHEME = 'SAVE_SCHEME';
export const LOAD_DATA = 'LOAD_DATA';

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
	type: UPDATE_FIELD,
	schemeId,
	fieldId,
	field
});

/* TODO: REFACTOR!!! */
export const loadData = (projectId) => {
  return (dispatch) => {
    return request.fetch(`/api/schemas/${projectId}`, 'GET').then((schemas) => {
    	const newSchemasState = {};
    	const newFieldsState = {};
      schemas.forEach((scheme) => {
      	newSchemasState[scheme._id] = {
      		name: scheme.name
				};
      	newFieldsState[scheme._id] = {};
      	scheme.fields.forEach(({_id, name, type}) => {
          newFieldsState[scheme._id][_id] = {
          	name,
						type
					}
				})
			});

      dispatch({type: LOAD_DATA, payload: {schemas: newSchemasState, fields: newFieldsState}});
    });
  };
};

/* TODO: make adding new scheme and updating the last one the same request */
export const saveScheme = (projectId, schemeId, name) => {
	return (dispatch, getState) => {
		const state = getState();
		const fields = state.projectSchemas.fields[schemeId] || [];
		return request.fetch('/api/schemas', 'PUT', {name, schemeId, projectId, fields}).then((data) => {
			dispatch({
				type: SAVE_SCHEME,
				schemeId,
				projectId,
				name
			});
		});
	};
};

const schemas = (state = DEFAULT_STATE.schemas, action) => {
	switch(action.type) {
		case DELETE_SCHEME:
			const {[action.id]: removedScheme, ...updatedSchemas} = state;
			return updatedSchemas;
		case ADD_EMPTY_SCHEME:
			return {...state, [uuidv4()]: EMPTY_SCHEME};
		case SAVE_SCHEME:
			return {...state, [action.schemeId]: {name: action.name} };
    case LOAD_DATA:
      return action.payload.schemas;
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
		case LOAD_DATA:
			return action.payload.fields;
		default:
			return state;
	}
};

export default combineReducers({
	schemas,
	fields
});
