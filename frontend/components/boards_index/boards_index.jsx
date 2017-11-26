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
    return (
      <div>
        <ToolBarContainer />
        <h1>yello</h1>
        <ul>
          { boards }
        </ul>
        <h1> whaaaa </h1>
      </div>
    );
  }

}

export default BoardsIndex;
