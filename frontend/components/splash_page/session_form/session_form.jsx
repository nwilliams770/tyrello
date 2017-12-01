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
    this.demoLogin = this.demoLogin.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push("/");
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    document.title = "Tyrello - Welcome";
  }

  renderErrors() {
    return(
      <ul className="login-errors">
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({username: 'Sansa-Stark', password: 'password'});
  }

  // typeWriter(e) {
  //   e.preventDefault();
  //   const username = document.getElementById("username");
  //   const password = document.getElementById("password");
  //
  //   const user_text = "Sansa-Stark";
  //   const pass_test = "password";
  //
  //   let i = 0;
  //   let speed = 40;
  //
  //   if (i < user_text.length) {
  //     username.innerHTML += text.charAt(i);
  //     i ++;
  //     setTimeout(typeWriter, speed)
  //   }
  // }

  render () {
    return (
    <div className="bg-box">
      <div className="login-master-box">
        <div id="login-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-copy">
              <h1 className="login-header">welcome.</h1>
              <hr/>
              <ul className="login-body"><div className="bullet-header">Get more done with Tyrello:</div>
                <div className="login-bullets">
                  <li>Flexible prioritization</li>
                  <li>Organize projects with lists and cards</li>
                  <li>Work more collaboratively</li>

                </div>
              </ul>
            </div>
            {this.renderErrors()}
            <div className="login-form">
              <label className="input-label"></label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input login-username"
                  id = "username"
                  placeholder="Username"
                />
              <label className="input-label"></label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input login-password"
                  id = "password"
                  placeholder="Password"
                />
            </div>
            <div className="session-buttons">
              <input className="session-button" type="submit" value="LOG IN" />
              <button className="session-button" onClick={this.demoLogin} >
                DEMO
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
