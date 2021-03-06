import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions';

const _nullErrors = [];

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_ERRORS:
      return _nullErrors;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};
