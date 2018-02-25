import React, { Component } from 'react';
import {connect} from 'react-redux';
import Input from '../../components/Input';
import {registerUser} from '../../redux/ducks/users';
import './Login.css';

class Login extends Component {
  componentDidMount() {

  }

  render() {

    return (
      <div className="login is-success">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <form>
                <Input type="email" placeholder="Your Email" autofocus=""></Input>
                <Input type="password" placeholder="Your Password"></Input>

                <div className="field">
                  <label className="checkbox">
                    <input type="checkbox"></input>
                    Remember me
                  </label>
                </div>
                <button className="login-btn button is-block is-info is-large is-fullwidth">Login</button>
              </form>
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  registerUser: (email, password) => dispatch(registerUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
