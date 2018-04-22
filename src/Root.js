import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import configureStore from './redux/configureStore';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import App from './App';
import Projects from './pages/Projects/Projects';
import ProjectSchemas from './pages/ProjectSchemas/ProjectSchemas.js';
import ProjectStatistics from './pages/ProjectStatistics/ProjectStatistics';
import Login from './pages/Login/Login';
import ProjectConfiguration from './pages/ProjectConfiguration/ProjectConfiguration';

const store = configureStore();

const Root = () => (
	<Provider store={store}>
		<Router>
			<App>
				<PrivateRoute exact path="/" component={ProgressBar}/>
				<PrivateRoute path="/projects" component={Projects}/>
				<PrivateRoute path="/projectSchemas" component={ProjectSchemas}/>
				<PrivateRoute path="/projectStatistics" component={ProjectStatistics}/>
				<PrivateRoute path="/projectConfiguration" component={ProjectConfiguration} />
				<Route path="/login" component={Login}/>
			</App>
		</Router>
	</Provider>
);

export default Root;