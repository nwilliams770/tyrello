import { connect } from 'react-redux';
import { createCard } from '../../../actions/card_actions';

import NewCardForm from './new_card_form';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createCard: (params) => dispatch(createCard(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);
