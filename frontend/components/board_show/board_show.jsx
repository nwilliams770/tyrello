import React from 'react';
import { withRouter } from 'react-router-dom';
import ToolBar from '../toolbar/toolbar';

class BoardShow extends React.Component {

  componentDidMount() {
    console.log(this.props);
    document.title = "Yo Mama!";
    let id = parseInt(this.props.match.params.id);
    // this.props.fetchBoard(id);
  }

  render () {
    // const lists = this.props.lists.map( (list) => (
    //   <li> { list.name }</li>
    // ));
    return (
      <div>
        <ToolBar />
        <h1> thanks for coming, jellybean!</h1>
        <ul>

        </ul>
      </div>
    );
  }
}

export default BoardShow;
