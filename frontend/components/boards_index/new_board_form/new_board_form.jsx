import React from 'react';
import { withRouter } from 'react-router-dom';



class NewBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      show: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
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

  toggleDropdown (e) {
    e.preventDefault();
    if (this.state.show) {
      this.setState({ show: false});
    } else {
      this.setState({ show: true});
    }
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
      <div>
        <li className="create-board">
          <button onClick={ this.toggleDropdown} className="create-board-button">
            <div className="create-board-copy">
              Create a new board...
            </div>
          </button>
        </li>
        <div
          id="new-board-form"
          onBlur={ this.toggleDropdown }
          className={ this.state.show ? 'show' : 'hide'}
          tabIndex='O'>
          <form>
            <button onClick={ this.toggleDropdown}>&#10005;</button>
            <label> Name:
              <input onChange={ this.handleChange('name')}
                placeholder="Name"
                value = { this.state.name } />
            </label>
            <button onClick={ this.handleSubmit }>Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewBoardForm);
