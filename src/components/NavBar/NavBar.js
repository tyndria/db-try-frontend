import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
	<div className="navbar">
		<div className="logo">
			<Link to="/">DBTry</Link>
		</div>

		{/*TODO: probably, create config with links and pass here in props*/}
		<div className="links">
			<span className="link"><Link to="/">Statistics</Link></span>
			<span className="link"><Link to="/">Requests</Link></span>
			<span className="link"><Link to="/projects" replace>Projects</Link></span>
		</div>
	</div>
);

export default NavBar;