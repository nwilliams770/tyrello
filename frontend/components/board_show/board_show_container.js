import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';
import { selectLists, selectCards } from '../../reducers/selectors';

const mapStateToProps = state => ({
  boards: state.entities.boards,
  lists : selectLists(state),
  cards: state.entities.cards
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow));
