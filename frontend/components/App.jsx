import React from 'react';
import { Provider } from 'react-redux';
import {
  Link,
  Route,
  Switch
 } from 'react-router-dom';


import SplashPage from './splash_page/splash_page';
import SignupFormContainer from './signup_form/signup_form_container';

import BoardsIndexContainer from './boards_index/boards_index_container';

import { AuthRoute, BoardsRoute } from '../util/route_util';

const App = () => (
  <div>

    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path="/boards" component={BoardsIndexContainer} />
      <AuthRoute path="/" component={SplashPage} />


    </Switch>
  </div>
);

export default App;
