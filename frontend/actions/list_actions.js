import * as APIUtil from '../util/list_api_util';

import { receiveBoard } from './board_actions';

export const createList = (params) => dispatch => (
  APIUtil.createList(params).then(board => dispatch(receiveBoard(board)))
);
