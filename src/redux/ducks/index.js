import { combineReducers } from 'redux';
import projectList from './projectList';
import projectSchemas from './projectSchemas';

const rootReducer = combineReducers({
	projectList,
	projectSchemas
});

export default rootReducer;