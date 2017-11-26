import React from 'react';
import { withRouter } from 'react-router-dom';


class BoardsIndexItem extends React.Component {
  render () {
    const { board } = this.props;
    return (
      <li>
        { board.name }
      </li>
    );
  }
}


export default BoardsIndexItem;
