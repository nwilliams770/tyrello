import React from 'react';
import { withRouter } from 'react-router-dom';

import CardItem from './card_item';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.list;
    const cards = this.props.cards.map(card => (
      <CardItem id={card.id} card={card} />
    ));
    return (
      <div>
        <h1> { list.title }</h1>
          {cards}

      </div>
    );
  }
}

export default ListItem;
