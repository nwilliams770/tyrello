import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <h1> Logo (to tha left)</h1>
    <Link to="/signup">
      <button type="button" className="signup-btn">
        Sign Up
      </button>
    </Link>
  </nav>
);


// change logic here to include NavBar as well as link footer container;
// this become session form/session form container
const SessionBar = ({ currentUser, logout}) => (
  sessionLinks()
);

export default SessionBar;
