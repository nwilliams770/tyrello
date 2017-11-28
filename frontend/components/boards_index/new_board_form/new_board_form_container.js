import { connect } from 'react-redux';
import { createBoard } from '../../../actions/board_actions';

import NewBoardForm from './new_board_form';

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createBoard: (params) => dispatch(createBoard(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBoardForm);
