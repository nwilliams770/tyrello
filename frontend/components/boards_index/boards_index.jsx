import React from 'react';

import BoardsIndexItem from './boards_index_item';
import ToolBarContainer from '../toolbar/toolbar_container';
import { Link } from 'react-router-dom';

class BoardsIndex extends React.Component {
  componentDidMount() {
    document.title = "Tyrello - Boards";
    this.props.fetchBoards();
  }

  // boards list item buttons will link to boards/:id
  // for shared boards need to figure out how to route them to other users' boards

  render() {
    const boards = this.props.boards.map( (board) => (
      <BoardsIndexItem key={ board.id } board={board} />
    ));

      // <ul>
      //   { boards }
      // </ul>
    return (
      <div className="bg-box2">
        <ToolBarContainer />
        <div className="personal-boards">
          <div className="personal-header-container">
            <i className="personal-icon fa fa-user fa-2x" aria-hidden="true"></i>
            <h1 className="boards-header">Personal Boards</h1>
          </div>
          <div className="boards-list-container">
            <ul>
              { boards }
            </ul>
            <ul className="boards-list">
              <li className="boards-list-item">
                <button className="boards-list-item-button">
                  <div className="boards-name">
                    Board 1
                  </div>
                </button>
              </li>
              <li className="boards-list-item">
                <button className="boards-list-item-button">
                  <div className="boards-name">
                    Board 2
                  </div>
                  </button>
              </li>
              <li className="boards-list-item">
                <button className="boards-list-item-button"> Board 3</button>
              </li>
              <li className="boards-list-item">
                <button className="boards-list-item-button"> Board 4</button>
              </li>
              <li className="create-board">
                <button className="create-board-button">
                  <div className="create-board-copy">
                    Create a new board...
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="shared-boards">
          <div className="shared-header-container">
            <i className="personal-icon fa fa-users fa-2x" aria-hidden="true"></i>
            <h1 className="boards-header">Shared Boards</h1>
          </div>
          <div className="boards-list-container">
            <ul className="boards-list">
              <li className="boards-list-item">
                <button className="boards-list-item-button">
                  <div className="boards-name">
                    Board 1
                  </div>
                </button>
              </li>
              <li className="boards-list-item">
                <button className="boards-list-item-button">
                  <div className="boards-name">
                    Board 2
                  </div>
                </button>
              </li>
              <li className="boards-list-item">
                <button className="boards-list-item-button">
                  <div className="boards-name">
                    Board 3
                  </div>
                </button>
              </li>
              <li className="boards-list-item">
                <button className="boards-list-item-button">
                  <div className="boards-name">
                    Board 4
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default BoardsIndex;
