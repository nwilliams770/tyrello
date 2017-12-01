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
    // return (<ToolBar />);

    if (!this.props.lists[0] || !this.props.cards.byListId) {
      return null;
    }
    const id = parseInt(this.props.match.params.id);


    const lists = this.props.lists.map( (list) => {
      if (this.props.cards.byListId[list.id]) {

        const cards = this.props.cards.byListId[list.id].map(cardId => (this.props.cards.byId[cardId]));
        return <ListItem key={list.id} list= {list} cards ={ cards } />;
      }
    });

    return (
      <div className="board-show-bg">
        <ToolBar />
        <div className="board-bar">
        </div>
        <ul className="lists-list">
          {lists}
          <NewListFormContainer id = { id }/>
        </ul>
      </div>
    );
  }
}
// const boardName = this.props.boards[id].name;
// document.title = `Tyrello - ${boardName}`;
export default BoardShow;
