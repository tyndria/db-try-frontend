import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import App from './App';
import Projects from './pages/Projects/Projects';

const Root = () => (
	<Router>
		<App>
			<Route exact path="/" component={ProgressBar}/>
			<Route path="/projects" component={Projects}/>
		</App>
	</Router>
);

export default Root;