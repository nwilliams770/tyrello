import lodash from 'lodash';

export const selectAllBoards = (state) => {
  return Object.keys(state.entities.boards).map(id => state.entities.boards[id]);
};
