import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {registerUser, loginUser} from '../../redux/ducks/users';
import './Login.css';

class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			confirmedPassword: '',
			isLoginForm: true,
			showRegisterError: false
		};
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value, showRegisterError: false});
	}

	onConfirmPasswordChange(e) {
		this.setState({confirmedPassword: e.target.value, showRegisterError: false});
	}

	toggleFormType() {
		this.setState((state) => ({
			isLoginForm: !state.isLoginForm
		}));
	}

	submitForm() {
		const {email, password, confirmedPassword} = this.state;
		if (!this.state.isLoginForm) {
			if (password === confirmedPassword) {
				this.props.registerUser(email, password);
			} else {
				this.setState({showRegisterError: true});
			}
		} else {
			this.props.loginUser(email, password);
		}
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
									<input type="checkbox" onChange={() => this.toggleFormType()}/>
									It's a first time
								</label>
							</div>

							<form>
								<Input type="email" placeholder="Your Email" onChange={(e) => this.onEmailChange(e)}
									   autofocus=""/>
								<Input type="password" placeholder="Your Password"
									   onChange={(e) => this.onPasswordChange(e)}/>
								{!this.state.isLoginForm &&
									<Input type="password" placeholder="Confirm Your Password"
									   onChange={(e) => this.onConfirmPasswordChange(e)}/>
								}
								{!this.state.isLoginForm && this.state.showRegisterError &&
									<div className="register-error"> The passwords are different! </div>
								}

								<Button onClick={() => this.submitForm()}
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
	registerUser: (email, password) => dispatch(registerUser(email, password)),
	loginUser: (email, password) => dispatch(loginUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
