import React from 'react';
import { withRouter } from 'react-router-dom';

class NewCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // list_id: parseInt(this.props.match.params.id),
      title: "",
      list_id: this.props.listId,
      visible: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = {title: this.state.title, board_id: this.state.list_id};
    if (params.title === "") {
      return;
    }
    this.props.createCard(params);
    this.setState({title: ""});
    this.handleClick();
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
    this.setState({title: ""});
  }

  render() {
    return(
      <div className="list-form-parent" ref={node => {this.node = node;}} >
        <button onClick={ this.handleClick} className="create-list-button">
          <div className="create-list-copy">
            Add a card...
          </div>
        </button>
        {this.state.visible && (
          <div>
            <div className='list-form-container'>
            <form>
              <label>
                <div className="new-list-input-container">
                  <input className="new-list-input"
                    onChange={ this.handleChange('title')}
                    placeholder="Title"
                    value = { this.state.title } />
                </div>
              </label>
              <button className="new-list-submit"
                onClick={ this.handleSubmit }>Add</button>
            </form>
            <button className="list-form-exit-button" onClick={ this.handleClick}>&#10005;</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(NewCardForm);
