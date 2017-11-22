import React from 'react';

import SessionBarContainer from './session_bar/session_bar_container';
import SessionFormContainer from './session_form/session_form_container';
import Footer from '../footer/footer';


class SplashPage extends React.Component {
  render () {
    return (
      <div>
        <SessionBarContainer />
        <SessionFormContainer />
        <Footer />
      </div>
    );
  }
}

export default SplashPage;
