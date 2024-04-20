import { configureStore } from '@reduxjs/toolkit';
import { LoadingBar, loadingBarReducer } from 'react-redux-loading-bar';
import booksReducer from './books/reducer';
import detailBookReducer from './detailBook/reducer';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';

const store = configureStore({
  reducer: {
    books: booksReducer,
    detailBook: detailBookReducer,
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
