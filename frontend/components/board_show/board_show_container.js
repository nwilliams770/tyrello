import { connect } from 'react-redux';

import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';
import { selectLists, selectCards } from '../../reducers/selectors';

const mapStateToProps = state => ({
  lists : selectLists(state),
  cards: selectCards(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
