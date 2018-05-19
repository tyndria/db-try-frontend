import { combineReducers } from 'redux';
import projectList from './projectList';
import projectSchemas from './projectSchemas';
import projectStatistics from './projectStatistics';
import logs from './logs';
import users from './users';
import schemasConfiguration from './schemeConfiguration';

const rootReducer = combineReducers({
	projectList,
	projectSchemas,
	projectStatistics,
	users,
	schemasConfiguration,
	logs,
});

export default rootReducer;