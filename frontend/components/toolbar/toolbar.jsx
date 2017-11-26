import React from 'react';
import { Link } from 'react-router-dom';
import SessionDropdown from "./session_dropdown";


class ToolBar extends React.Component {
  constructor(props) {
    super(props);
  }

  showSessionDropdown() {
    this.refs.showSession();
  }

  render () {
    return (
        <div className="toolbar-container">
          <div className="boards-button-container">
            <div className="boards-dropdown">
              <button className="boards-button">
                <img src="http://res.cloudinary.com/nwilliams770/image/upload/c_scale,h_18/v1511726611/logo_gku6sb.png"
                  className="boards-btn-logo" />
                <div className="boards-button-copy">
                  Boards
                </div>
              </button>
              <div id="boards-dropdown-content" className="boards-content">
              </div>
            </div>
          </div>
          <div className="logo-container">
            <div className="logo">
            </div>
          </div>
          <div className="right-buttons-container">
            <a className="icon-links" target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
              <button className="right-buttons"><i className="right-buttons-icon fa fa-plus fa-2x" aria-hidden="true"></i></button>
            </a>
            <a className="icon-links" target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
              <button className="right-buttons"><i className="right-buttons-icon fa fa-info fa-2x" aria-hidden="true"></i></button>
            </a>
            <a className="icon-links" target="_blank" href="https://www.linkedin.com/in/nwilliams770/">
              <button className="right-buttons"><i className="right-buttons-icon fa fa-bell-o fa-2x" aria-hidden="true"></i></button>
            </a>

            <button className="toolbar-sess-btn">PIC</button>
          </div>
        </div>
    );
  }
}

export default ToolBar;
