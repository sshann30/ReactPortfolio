import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import LoginForm from '../../components/LoginForm/LoginForm';

class Login extends Component {
  static contextType = AuthContext;

  state = {
    redirectToReferrer: false,
    error: ""
  }

  handleSubmit = (email, password) => {
    API.Users.login(email, password)
      .then(response => response.data)
      .then(({ user, token }) => {
        this.context.onLogin(user, token);
        this.setState({ redirectToReferrer: true, error: "" });
      })
      .catch(err => {
        if (err.response.status === 401) {
          this.setState({ error: "Sorry, that email/password combination is not valid. Please try again." });
        }
      });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/home" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className='Login'>
        <div className='row'>
          <div className='col'>
          <div className='navbar-brand logo' to='#'>Login</div>
          </div>
        </div>
        {this.state.error &&
          <div className='row'>
            <div className='col'>
              <div className='alert alert-danger mb-3' role='alert'>
                {this.state.error}
              </div>
            </div>
          </div>}
        <div className='row'>
          <div className='col'>
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
