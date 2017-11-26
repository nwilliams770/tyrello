import React from 'react';

import BoardsIndexItem from './boards_index_item';
import ToolBarContainer from '../toolbar/toolbar_container';

class BoardsIndex extends React.Component {
  componentDidMount() {
    document.title = "Tyrello - Boards";
    this.props.fetchBoards();
  }

  render() {
    // const boards = this.props.boards.map( (board) => (
    //   <BoardsIndexItem key={ board.id } board={board} />
    // ));
    let props = this.props;
    const boards = this.props.boards.map((board) => {
      return <li> {board.name}</li>;
      });
      // <ul>
      //   { boards }
      // </ul>
    return (
      <div>
        <ToolBarContainer />
        <div className="personal-boards">
          <div className="personal-header-container">
            <i class="personal-icon fa fa-user fa-2x" aria-hidden="true"></i>
            <h1 className="boards-header">Personal Boards</h1>
          </div>
          <div className="boards-list">
            <ul>
              <li>Board 1</li>
              <li>Board 2</li>
              <li>Board 3</li>
              <li>Board 4</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default BoardsIndex;
