import React from 'react';
import { Provider } from 'react-redux';
import {
  Link,
  Route
 } from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignupFormContainer from './signup_form/signup_form_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1> Tyrello </h1>
      </Link>
      <GreetingContainer />
    </header>

    <SessionFormContainer />

    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
