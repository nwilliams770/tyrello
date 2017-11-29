import { merge } from 'lodash';

import { RECEIVE_BOARD } from '../actions/board_actions';

const defaultState = ({
    byListId: {},
    byId: {}
  }
);

const cardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      let newBoard = action.board.cards;
      return merge({}, state, newBoard);
    default:
      return state;
  }
};

export default cardsReducer;
