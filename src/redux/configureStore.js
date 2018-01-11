import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks/index';

const configureStore = () => {
	const enhancer = composeWithDevTools(
		applyMiddleware(thunk, logger)
	);

	return createStore(rootReducer, enhancer);
};

export default configureStore;