import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const PrivateRoute = ({user, component: Component, ...rest}) => (
	<Route
		{...rest}
		render={props =>
			user ? (
				<Component {...props} />
			) : (
				<Redirect to={{
					pathname: '/login',
					state: {from: props.location}
				}}/>
			)
		}
	/>
);

const mapStateToProps = (state) => ({
	user: state.users.user
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));