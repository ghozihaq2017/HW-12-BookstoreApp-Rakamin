import { ActionType } from './action';

function booksReducer(books = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_BOOKS:
      return action.payload.books;
    case ActionType.ADD_BOOK:
      return [...books, action.payload.book];
    case ActionType.UPDATE_BOOK:
      return books.map((book) => {
        if (book.id === action.payload.bookId) {
          return action.payload.updatedBook;
        }
        return book;
      });
    case ActionType.REMOVE_BOOK:
      return books.filter((book) => book.id !== action.payload.bookId);
    default:
      return books;
  }
}

export default booksReducer;
