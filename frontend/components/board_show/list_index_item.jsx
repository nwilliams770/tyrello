import React from 'react';
import { withRouter } from 'react-router-dom';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.list;
    return (
      <div>
        <h1> { list.title }</h1>

      </div>
    );
  }
}

export default ListIndexItem;
