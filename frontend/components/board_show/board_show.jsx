import React from 'react';
import { withRouter } from 'react-router-dom';
import ToolBar from '../toolbar/toolbar';
import ListItem from './list_item';
import NewListFormContainer from './new_list_form/new_list_form_container';

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
      this.props.fetchBoard(id);
    }
  }
  componentWillMount() {
    let id = parseInt(this.props.match.params.id);
    this.props.fetchBoard(id);
  }

  render () {

    if (!this.props.lists[0] || !this.props.cards.byListId) {
      return null;
    }
    const id = parseInt(this.props.match.params.id);
    const boardName = this.props.boards[id].name;
    document.title = `Tyrello - ${boardName}`;
    const lists = this.props.lists.map( (list) => {
      if (this.props.cards.byListId[list.id]) {

        const cards = this.props.cards.byListId[list.id].map(cardId => (this.props.cards.byId[cardId]));
        return <ListItem key={list.id} list= {list} cards ={ cards } boardName = {boardName} />;
      }
    });

    return (
      <div>
        <ToolBar />
        <div className="board-bar">
          { boardName }
        </div>
        <ul className="lists-list">
          {lists}
          <NewListFormContainer id = { id }/>
        </ul>
      </div>
    );
  }
}

export default BoardShow;
