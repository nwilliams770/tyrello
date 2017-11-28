import React from 'react';

class SessionDropdown extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <h1> {this.props.currentUser.username} </h1>
    );
  }
}

export default SessionDropdown;
