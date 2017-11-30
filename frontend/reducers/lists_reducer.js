import { merge } from 'lodash';

import { RECEIVE_BOARD } from '../actions/board_actions';

const defaultState = ({
  allIds: [],
  byId: {}
  }
);

// ({
//   boards: {
//     byId: {},
//     allIds: []
//   },
//   lists: {
//     allIds: [],
//     byId: {}
//   }
// });


const listsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      let newBoard = action.board.lists;
      if (newBoard === undefined) {
        newBoard = null;
      }
      return newBoard;
    default:
      return state;
  }
};

export default listsReducer;
