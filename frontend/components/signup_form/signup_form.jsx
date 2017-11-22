import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    this.props.signup(user);
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
          <div className="signup-form">
            <div className="signup-copy">
              Logo
              <h2>Sign Up!</h2>
              <p>
                Already have an account?
                <Link to="/login">
                  Log In
                </Link>
              </p>
            </div>
            <br/>
            <label>Email:
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Username:
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Password:
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br/>
            <input type="submit" value="Sign Up" />

          </div>
        </form>
        </div>
    );
  }
}

export default withRouter(SignupForm);
