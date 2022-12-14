import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Tgl0nQKaAYBzzdbCfHYY/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';

const initState = [];

// Action Creator
export const addBooks = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBookApi = () => async (dispatch) => {
  const response = await axios.get(POST_URL);
  const data = await response.data;

  const books = Object.entries(data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      itemId: key,
      title,
      category,
      author,
    };
  });
  if (books) {
    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
  }
};

export const addNewBook = createAsyncThunk(ADD_BOOK, (action) => (async () => {
  const { payload, dispatch } = action;
  await fetch(POST_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  dispatch(addBooks(payload));
})());

export const deleteBook = (itemId) => async (dispatch) => {
  const response = await axios.delete(`${POST_URL}/${itemId}`);
  if (response.status === 201) {
    dispatch({
      type: REMOVE_BOOK,
      payload: itemId,
    });
  }
};

// reducer
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return [
        ...action.payload,
      ];
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((book) => (book.itemId) !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
