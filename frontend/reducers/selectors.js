import values from 'lodash/values';

export const selectPersonalBoards = (state) => {
  let personalIds = values(state.entities.boards.allIds.personal);
  return personalIds.map(id => (state.entities.boards.byId[id]));
};

export const selectSharedBoards = (state) => {
  let sharedIds = values(state.entities.boards.allIds.shared);
  return sharedIds.map(id => (state.entities.boards.byId[id]));
};
