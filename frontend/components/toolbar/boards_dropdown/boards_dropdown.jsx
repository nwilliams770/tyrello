import React from 'react';
import { Link } from 'react-router-dom';


class BoardsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    // this.props.fetchBoards();
  }

  handleClick() {
    if (!this.state.visible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }
  render() {
    // const personalBoards = this.props.personalBoards.map( (board) => (
    //   <li key={ board.id }> {board.name} </li>
    // ));
    //
    // const sharedBoards = this.props.sharedBoards.map( (board) => (
    //   <li key={ board.id }> {board.name} </li>
    // ));

    return (
      <div ref={node => {this.node = node;}} >
        <button className="boards-button" onClick= {this.handleClick}>
          <img src="http://res.cloudinary.com/nwilliams770/image/upload/c_scale,h_18/v1511726611/logo_gku6sb.png"
            className="boards-btn-logo" />
          <div className="boards-button-copy">
            Boards
          </div>
        </button>
        {this.state.visible && (
          <div className='boards-dropdown'>
              <div className="personal-boards">
                <h1> Personal Baords</h1>
                <ul>

                </ul>
              </div>
              <div className="shared-boards">
                <h1> Shared Baords</h1>
                <ul>

                </ul>
              </div>

              <hr className="board-form-underline" />
              <button onClick={ this.handleClick}>&#10005;</button>
          </div>
        )}
      </div>
    );
  }
}

export default BoardsDropdown;
