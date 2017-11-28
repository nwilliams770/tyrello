import React from 'react';

import BoardsIndexItem from './boards_index_item';
import ToolBarContainer from '../toolbar/toolbar_container';
import NewBoardFormContainer from './new_board_form/new_board_form_container';
import { Link } from 'react-router-dom';

class BoardsIndex extends React.Component {
  componentDidMount() {
    document.title = "Tyrello - Boards";
    this.props.fetchBoards();
  }

  // boards list item buttons will link to boards/:id
  // for shared boards need to figure out how to route them to other users' boards

  render() {
    const personalBoards = this.props.personalBoards.map( (board) => (
      <BoardsIndexItem key={ board.id } board={board} />
    ));

    const sharedBoards = this.props.sharedBoards.map( (board) => (
      <BoardsIndexItem key={ board.id } board={board} />
    ));

    // const passedPersonalBoards = this.props.personalBoards.map( (board) => (
    //   <li key={ board.id } board={board}> {board.name} </li>
    // ));

    return (
      <div className="bg-box2">
        <ToolBarContainer />
        <div className="personal-boards">
          <div className="personal-header-bg">
            <div className="personal-header-container">
              <i className="personal-icon fa fa-user fa-2x" aria-hidden="true"></i>
              <h1 className="boards-header">Personal Boards</h1>
            </div>
          </div>
          <div className="boards-list-container">
            <ul className="boards-list">
                { personalBoards }
                <NewBoardFormContainer />
            </ul>
          </div>
        </div>
        <div className="shared-boards">
          <div className="shared-header-bg">
            <div className="shared-header-container">
              <i className="personal-icon fa fa-users fa-2x" aria-hidden="true"></i>
              <h1 className="boards-header">Shared Boards</h1>
            </div>
          </div>
          <div className="boards-list-container">
            <ul className="boards-list">
              { sharedBoards }
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default BoardsIndex;
