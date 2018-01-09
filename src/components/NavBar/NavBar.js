import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
	<div className="navbar">
		<span className="logo">
			<Link to="/">DBTry</Link>
		</span>

		<span>
			<span className="button"><Link to="/">Statistics</Link></span>
			<span className="button"><Link to="/">Requests</Link></span>
			<span className="button"><Link to="/projects" replace>Projects</Link></span>
		</span>
	</div>
);

export default NavBar;