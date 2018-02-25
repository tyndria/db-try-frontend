import { combineReducers } from 'redux';
import projectList from './projectList';
import projectSchemas from './projectSchemas';
import projectStatistics from './projectStatistics';
import users from './users';

const rootReducer = combineReducers({
	projectList,
	projectSchemas,
	projectStatistics,
	users
});

export default rootReducer;