import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from '../../redux/ducks/users';
import Button from '../Button';
import './NavBar.css';



const NavBar = ({user, logOut}) => (
	<nav className="navbar">
		<div className="navbar-brand logo">
			<Link to="/">DBTry</Link>
		</div>
		{/*TODO: probably, create config with links and pass here in props*/}
		<div className="navbar-menu">
			<div className="navbar-start links">
				<div className="navbar-item link"><Link to="/">Statistics</Link></div>
				<div className="navbar-item link"><Link to="/projects" replace>Projects</Link></div>
			</div>
			<div className="navbar-end">
				<div className="auth">
					{user && <span className="user">{user.email}</span> }
					<div className="auth-control">
						{user ?
							<Button className="login-btn is-link is-outlined"
									onClick={() => logOut()}>Log Out
							</Button> :
							<Button className="login-btn is-link is-outlined"><Link to="/login" replace>Login</Link></Button>
						}
					</div>
				</div>
			</div>
		</div>
	</nav>
);

const mapStateToProps = (state) => ({
	user: state.users.user
});

const mapDispatchToProps = (dispatch) => ({
	logOut: (email) => dispatch(logOut(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);