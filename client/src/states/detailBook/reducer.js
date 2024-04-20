import { ActionType } from './action';

function detailBookReducer(detailBook = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_BOOK:
      return action.payload.detailBook;
    case ActionType.REMOVE_DETAIL_BOOK:
      return {};

    default:
      return detailBook;
  }
}

export default detailBookReducer;
