import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_BOOK: 'RECEIVE_DETAIL_BOOK',
  REMOVE_DETAIL_BOOK: 'REMOVE_DETAIL_BOOK',
};

function receiveDetailBookActionCreator(detailBook) {
  return {
    type: ActionType.RECEIVE_DETAIL_BOOK,
    payload: {
      detailBook,
    },
  };
}

function removeDetailBookActionCreator() {
  return {
    type: ActionType.REMOVE_DETAIL_BOOK,
  };
}

function asyncReceiveDetailThread(bookId) {
  return async (dispatch) => {
    dispatch(removeDetailBookActionCreator());
    try {
      dispatch(removeDetailBookActionCreator());
      const detailBook = await api.getDetailBook(bookId);
      dispatch(receiveDetailBookActionCreator(detailBook));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveDetailBookActionCreator,
  removeDetailBookActionCreator,
  asyncReceiveDetailThread,
};
