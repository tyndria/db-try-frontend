import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
	<nav className="navbar">
		<div className="navbar-brand logo">
			<Link to="/">DBTry</Link>
		</div>

		{/*TODO: probably, create config with links and pass here in props*/}
		<div className="links">
			<span className="link"><Link to="/">Statistics</Link></span>
			<span className="link"><Link to="/">Requests</Link></span>
			<span className="link"><Link to="/projects" replace>Projects</Link></span>
		</div>
	</nav>
);

export default NavBar;