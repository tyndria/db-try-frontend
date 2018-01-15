import { combineReducers } from 'redux';
import projectList from './projectList';
import projectSchemas from './projectSchemas';
import projectStatistics from './projectStatistics';

const rootReducer = combineReducers({
	projectList,
	projectSchemas,
	projectStatistics
});

export default rootReducer;