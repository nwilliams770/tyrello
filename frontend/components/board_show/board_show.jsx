import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardShow extends React.Component {

  componentDidMount() {
    document.title = "Somethang!";
  }

  render () {
    return (
      <h1> thanks for coming, jellybean!</h1>
    );
  }
}

export default BoardShow;
