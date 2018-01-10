import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import App from './App';
import Projects from './pages/Projects/Projects';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<Router>
			<App>
				<Route exact path="/" component={ProgressBar}/>
				<Route path="/projects" component={Projects}/>
			</App>
		</Router>
	</Provider>
);

export default Root;