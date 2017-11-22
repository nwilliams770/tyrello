import React from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1> Tyrello </h1>
      </Link>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
