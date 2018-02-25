import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import App from './App';
import Projects from './pages/Projects/Projects';
import ProjectSchemas from './pages/ProjectSchemas/ProjectSchemas.js';
import ProjectStatistics from './pages/ProjectStatistics/ProjectStatistics';
import Login from './pages/Login/Login';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<Router>
			<App>
				<Route exact path="/" component={ProgressBar}/>
				<Route path="/projects" component={Projects}/>
				<Route path="/projectSchemas" component={ProjectSchemas}/>
				<Route path="/projectStatistics" component={ProjectStatistics}/>
				<Route path="/login" component={Login}/>
			</App>
		</Router>
	</Provider>
);

export default Root;