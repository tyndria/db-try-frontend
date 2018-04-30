import { combineReducers } from 'redux';
import projectList from './projectList';
import projectSchemas from './projectSchemas';
import projectStatistics from './projectStatistics';
import users from './users';
import schemasConfiguration from './schemeConfiguration';

const rootReducer = combineReducers({
	projectList,
	projectSchemas,
	projectStatistics,
	users,
	schemasConfiguration,
});

export default rootReducer;