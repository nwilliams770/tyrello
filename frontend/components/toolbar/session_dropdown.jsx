import React from 'react';

class SessionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  showSession() {
    this.setState({
      open: true
    });
  }

  render () {
    if (this.state.open) {
      return (
        <h1> success </h1>
      );
    }
    else {
      return null;
    }
  }
}

export default SessionDropdown;
