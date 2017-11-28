import { connect } from 'react-redux';

import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';

const mapStateToProps = state => ({
  // personalBoards: selectPersonalBoards(state),
  // sharedBoards: selectSharedBoards(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: () => dispatch(fetchBoard())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
