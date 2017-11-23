import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="session-bar">
    <div className="session-bar-contents">
      <div className="logo-box">
      </div>
      <Link to="/signup">
        <button type="button" className="signup-btn">
          SIGN UP
        </button>
      </Link>
    </div>
  </nav>
);


// change logic here to include NavBar as well as link footer container;
// this become session form/session form container
const SessionBar = ({ currentUser, logout}) => (
  sessionLinks()
);

export default SessionBar;
