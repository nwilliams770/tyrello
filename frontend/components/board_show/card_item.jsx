import React from 'react';
import { withRouter } from 'react-router-dom';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = this.props.card;
    return (
      <div className="card-item">
        {card.title}
      </div>
    );
  }
}

export default CardItem;
