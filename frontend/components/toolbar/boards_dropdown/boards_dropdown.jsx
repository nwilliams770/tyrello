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
    this.props.fetchBoards();

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
    if (!this.props.personalBoards) {
      return <div></div>;
    }
    const passedPersonalBoards = this.props.personalBoards.map( (board) => {
      let link = `/boards/${board.id}`;
      return (
      <Link to={ link } className="boards-item-link" >
        <li className="boards-dropdown-item"
          key={ board.id }
          board={board}> {board.name} </li>
      </Link>
      );
    });

    const passedSharedBoards = this.props.sharedBoards.map( (board) => {
      let link = `/boards/${board.id}`;
      return (
      <Link to={ link } className="boards-item-link" >
        <li className="boards-dropdown-item"
          key={ board.id }
          board={board}> {board.name} </li>
      </Link>
      );
    });
    // const personalBoards = this.props.personalBoards.map( (board) => (
    //   <li key={ board.id }> {board.name} </li>
    // ));
    //
    // const sharedBoards = this.props.sharedBoards.map( (board) => (
    //   <li key={ board.id }> {board.name} </li>
    // ));
    // const personalBoards = this.props.personalBoards;
    // const sharedBoards = this.props.sharedBoards;

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
          <div id="bg-test" className="boards-dropdown-container">
            <div className="boards-dropdown-main">
              <div className="personal-boards-dropdown">
                <i className="dropdown-icon fa fa-user fa" aria-hidden="true"></i>
                <h1 className="boards-dropdown-header">Personal Boards</h1>
              </div>
              <ul className="boards-dropdown-list">
                { passedPersonalBoards }
              </ul>

              <div className="shared-boards-dropdown">
                <i className="dropdown-icon fa fa-users fa" aria-hidden="true"></i>
                <h1 className="boards-dropdown-header">Shared Boards</h1>
              </div>
              <ul className="boards-dropdown-list">
                { passedSharedBoards }
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BoardsDropdown;
