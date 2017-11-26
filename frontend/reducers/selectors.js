import lodash from 'lodash';

export const selectAllBoards = (state) => {
  return lodash.values(state.entities.boards);
};
