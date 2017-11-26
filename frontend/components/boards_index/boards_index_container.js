import { connect } from 'react-redux';

import BoardsIndex from './boards_index';
import { fetchBoards } from '../../actions/board_actions';
import { selectAllBoards } from '../../reducers/selectors';


const mapStateToProps = state => ({
  boards: selectAllBoards(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
