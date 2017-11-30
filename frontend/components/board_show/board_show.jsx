import React from 'react';
import { withRouter } from 'react-router-dom';
import ToolBar from '../toolbar/toolbar';
import ListItem from './list_item';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.id !== newProps.match.params.id ) {
      let id = parseInt(newProps.match.params.id);
      this.props.fetchBoard(id).then( () => (this.setState({ done: true })));
    }
  }
  componentWillMount() {
    document.title = "Tomber dans le feu";
    let id = parseInt(this.props.match.params.id);
    this.props.fetchBoard(id).then( () => (this.setState({ done: true })));
  }

  render () {

    if (this.state.done === false) {
      return <div></div>;
    }
    const lists = this.props.lists.map( (list) => {

      const cards = this.props.cards.byListId[list.id].map(cardId => (this.props.cards.byId[cardId]));
      return <ListItem key={list.id} list= {list} cards ={ cards }/>;
    });

    return (
      <div>
        <ToolBar />
        <ul>
          {lists}
        </ul>
      </div>
    );
  }
}

export default BoardShow;
