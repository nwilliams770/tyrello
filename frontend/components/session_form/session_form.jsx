import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
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
        <div className="login-copy">
          <h2>Welcome to Tyrello</h2>
          <p>
            Tyrello allows you to prioritize your projects with boards,
            lists, and cards. Work collaboratively and get more done.
            And some other cool shit
          </p>
        </div>
        {this.renderErrors()}
        <div className="login-form">
          <br/>
          <label>Username:
            <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
          </label>
          <br/>
          <label>Password:
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br/>
          <input type="submit" value="Log In" />

        </div>
      </form>
      </div>

    );
  }
}

export default withRouter(SessionForm);
