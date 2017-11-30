import React from 'react';
import { withRouter } from 'react-router-dom';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    return (
      <div>
        <h1> {card.title}</h1>
          
      </div>
    );
  }
}

export default CardItem;
