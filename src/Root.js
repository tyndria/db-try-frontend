import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProgressBar from './components/ProgressBar/ProgressBar.js';
import App from './App';
import Projects from './pages/Projects/Projects';

const Root = () => (
	<Router>
		<div>
			<Route path="/" component={App}/>
			<Route exact path="/" component={ProgressBar}/>
			<Route path="/projects" component={Projects}/>
		</div>
	</Router>
);

export default Root;