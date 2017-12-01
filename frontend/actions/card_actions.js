import * as APIUtil from '../util/card_api_util';

import { receiveBoard } from './board_actions';

export const createCard = (params) => dispatch => (
  APIUtil.createCard(params).then(board => dispatch(receiveBoard(board)))
);
