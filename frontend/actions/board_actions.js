import * as APIUtil from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BENCH";

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const fetchBoards = () => dispatch => (
  APIUtil.fetchBoards().then(boards => (dispatch(receiveBoards(boards))))
);

export const fetchBoard = (id) => dispatch => (
  APIUtil.fetchBoard(id).then(board => (dispatch(receiveBoard(board))))
);
