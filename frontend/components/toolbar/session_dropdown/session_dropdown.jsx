import React from 'react';

class SessionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.visible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }


  render () {
    return (
      <div ref={node => {this.node = node;}} >
        <button className="toolbar-sess-btn" onClick={ this.handleClick}>PIC</button>
          {this.state.visible && (
            <div className='session-dropdown'>
                <div className="current-user-header">
                  {this.props.currentUser.username}
                </div>
                <hr className="board-form-underline" />
                <button onClick={ this.props.logout }>Logout</button>
                <button onClick={ this.handleClick}>&#10005;</button>
            </div>
          )}
      </div>
    );
  }
}

export default SessionDropdown;
