import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/signup">
      <button type="button" className="signup-btn">
        Sign Up
      </button>
    </Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <div>
    <h2>Hi {currentUser.username}</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </div>
);

// change logic here to include NavBar as well as link footer container;
// this become session form/session form container
const Greeting = ({ currentUser, logout}) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
