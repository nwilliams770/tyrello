import React from 'react';
import { Link } from 'react-router-dom';
import SessionDropdown from './session_dropdown/session_dropdown_container';
import BoardsDropdown from './boards_dropdown/boards_dropdown';


class ToolBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="toolbar-background">
        <div className="toolbar-container">
          <div className="boards-button-container">
            <div className="boards-dropdown">
              <BoardsDropdown
                personalBoards= { this.props.personalBoards }
                sharedBoards= {this.props.sharedBoards }/>
            </div>
          </div>
          <Link className="logo-container" to="/boards">

              <div className="logo">

            </div>
          </Link>
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

            <SessionDropdown />
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
