import React from 'react';
import { withRouter } from 'react-router-dom';

import CardItem from './card_item';
import NewCardFormContainer from './new_card_form/new_card_container';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.list;
    const boardName = this.props.boardName;
    const cards = this.props.cards.map(card => (
      <CardItem id={card.id} card={card} />
    ));
    return (
      <div>
        <div className="list-item-main">
          <div className="list-header-container">
            <div className = "list-header" >
              { list.title }
            </div>
          </div>
          <div className="cards">
            {cards}
          </div>
          <NewCardFormContainer listId = {this.props.list.id} />
        </div>
      </div>

    );
  }
}

export default ListItem;
