import React from 'react';
import { withRouter } from 'react-router-dom';



class NewBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      visible: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }


  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = this.state.name;
    this.props.createBoard(params)
      .then(newBoard => {
        // this.props.history.push(`boards/${newBoard.id}`);
        this.setState({name: ""});
      });
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( err =>
        <li> err </li>)}
      </ul>
    );
  }

  render() {
    return(
      <div ref={node => {this.node = node;}} >
        <li className="create-board">
          <button onClick={ this.handleClick} className="create-board-button">
            <div className="create-board-copy">
              Create a new board...
            </div>
          </button>
        </li>
        {this.state.visible && (
          <div className='board-form-container'>
            <form>
              <button onClick={ this.handleClick}>&#10005;</button>
              <div className="board-form-header">
                Create Board
              </div>
              <hr className="board-form-underline" />
              <label> Name:
                <input onChange={ this.handleChange('name')}
                  placeholder="Name"
                  value = { this.state.name } />
              </label>
              <button onClick={ this.handleSubmit }>Create</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(NewBoardForm);
