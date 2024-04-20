import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_BOOKS: 'RECEIVE_BOOKS',
  ADD_BOOK: 'ADD_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

function receiveBooksActionCreator(books) {
  return {
    type: ActionType.RECEIVE_BOOKS,
    payload: {
      books,
    },
  };
}

function addBookActionCreator(book) {
  return {
    type: ActionType.ADD_BOOK,
    payload: {
      book,
    },
  };
}

function updateBookActionCreator(bookId, updatedBook) {
  return {
    type: ActionType.UPDATE_BOOK,
    payload: {
      bookId,
      updatedBook,
    },
  };
}

function removeBookActionCreator(bookId) {
  return {
    type: ActionType.REMOVE_BOOK,
    payload: {
      bookId,
    },
  };
}

function asyncReceiveBooks() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const books = await api.getAllBooks();
      dispatch(receiveBooksActionCreator(books));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddBook(formData) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const book = await api.addBook(formData);
      dispatch(addBookActionCreator(book));
    } catch (error) {
      console.error('Error while adding book:', error);
      throw error;
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateBook({ id, title, author, publisher, year, pages }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const updatedBook = await api.editBook({ id, title, author, publisher, year, pages });

      if (!updatedBook || !updatedBook.id || !updatedBook.title || !updatedBook.author) {
        throw new Error('Data buku yang diperbarui tidak valid');
      }

      dispatch(updateBookActionCreator(id, updatedBook));
    } catch (error) {
      alert(error.message || 'Gagal memperbarui buku');
    }
    dispatch(hideLoading());
  };
}

function asyncRemoveBook(bookId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.deleteBook(bookId);
      dispatch(removeBookActionCreator(bookId));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveBooksActionCreator,
  addBookActionCreator,
  updateBookActionCreator,
  removeBookActionCreator,
  asyncReceiveBooks,
  asyncAddBook,
  asyncUpdateBook,
  asyncRemoveBook,
};
