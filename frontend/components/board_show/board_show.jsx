import React from 'react';
import { withRouter } from 'react-router-dom';
import ToolBar from '../toolbar/toolbar';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = "Tomber dans le feu";
    let id = parseInt(this.props.match.params.id);
    this.props.fetchBoard(id);

  }

  render () {
    const lists = this.props.lists.map( (list) => (
      <li key={list.id}> { list.title }</li>
    ));
    console.log(lists);
    return (
      <div>
        <ToolBar />
        <h1> thanks for coming, jellybean!</h1>
        <ul>
          {lists}
        </ul>
      </div>
    );
  }
}

export default BoardShow;
