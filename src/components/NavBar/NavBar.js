import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
import './NavBar.css';

const NavBar = () => (
	<nav className="navbar">
		<div className="navbar-brand logo">
			<Link to="/">DBTry</Link>
		</div>

		{/*TODO: probably, create config with links and pass here in props*/}
		<div className="navbar-menu">
			<div className="navbar-end links">
				<div className="navbar-item link"><Link to="/">Statistics</Link></div>
				<div className="navbar-item link"><Link to="/projects" replace>Projects</Link></div>
				<Button className="login-btn is-link is-outlined"><Link to="/login" replace>Login</Link></Button>
			</div>
		</div>
	</nav>
);

export default NavBar;