import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Footer from '../footer/footer';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user).then(() => this.props.history.push("/boards"));
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="bg-box">
        <div className="login-master-box">
          <div id="login-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

              <div className="sign-up-copy">
                <div className="header-logo-box">
                  <div className="header-logo">
                  </div>
                </div>
                <h1 className="sign-up-header">sign up.</h1>
                <p className="sign-up-body">
                  Already have an account?
                  <Link className="login-link" to="/login">
                    Log In
                  </Link>
                </p>
              </div>
              {this.renderErrors()}
              <div className="login-form">
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input signup-email"
                  placeholder="Email"
                />

                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input signup-username"
                  placeholder="Username"
                />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input signup-password"
                  placeholder="Password"
                />
              <input className="session-button" id="sign-up-button" type="submit" value="Sign Up" />

            </div>
          </form>
        </div>
      <Footer />
    </div>
  </div>
    );
  }
}

export default withRouter(SignupForm);
