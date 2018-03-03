import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {registerUser} from '../../redux/ducks/users';
import './Login.css';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			isLoginForm: true
		};
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	onConfirmPasswordChange(e) {

	}

	toggleFormType() {
		this.setState((state) => ({
			isLoginForm: !state.isLoginForm
		}));
	}

	render() {
		const {registerUser} = this.props;
		return (
			<div className="login is-success">
				<div className="container has-text-centered">
					<div className="column is-4 is-offset-4">
						<h3 className="title has-text-grey">{this.state.isLoginForm ? 'Login' : 'Register'}</h3>
						<div className="box">
							<div className="field">
								<label className="checkbox">
									<input type="checkbox" onChange={() => this.toggleFormType()} />
									It's a first time
								</label>
							</div>

							<form>
								<Input type="email" placeholder="Your Email" onChange={(e) => this.onEmailChange(e)} autofocus="" />
								<Input type="password" placeholder="Your Password" onChange={(e) => this.onPasswordChange(e)} />
								{ !this.state.isLoginForm &&
								<Input type="password" placeholder="Confirm Your Password" onChange={(e) => this.onConfirmPasswordChange(e)} />
								}

								<Button onClick={() => registerUser(this.state.email, this.state.password)}
										className="login-btn is-block is-info is-large is-fullwidth">
									Ok
								</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	registerUser: (email, password) => dispatch(registerUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
