import React from 'react';
import { Link } from 'react-router-dom';

const ToolBar = ({ currentUser, logout}) => {
  return (
    <div className="toolbar-container">
      <div className="boards-button-container">
        <button> Boards</button>
      </div>
      <div className="logo-container">
          LOGO
      </div>
      <div className="right-buttons">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      USER PHOTO
      </div>
    </div>
  );
};

export default ToolBar;
