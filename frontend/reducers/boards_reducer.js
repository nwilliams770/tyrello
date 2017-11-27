import { merge } from 'lodash';

import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD
} from '../actions/board_actions';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARDS:
      return merge({}, state, action.boards);
    case RECEIVE_BOARD:
      const newBoard = {[action.board.id]: action.board};
      return merge({}, state, newBoard);
    default:
      return state;
  }
};

export default boardsReducer;
