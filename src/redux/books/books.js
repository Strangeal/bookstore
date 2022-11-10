import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const POST_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Tgl0nQKaAYBzzdbCfHYY/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'FETCH_BOOKS';

const initState = [];

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

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (initBooks) => {
    try {
      const response = await axios.post(POST_URL, initBooks);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

export const deleteBook = (itemId) => async (dispatch) => {
  const response = await axios.delete(`${POST_URL}/${itemId}`);
  if (response.status === 201) {
    dispatch({
      type: REMOVE_BOOK,
      itemId,
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

// Action Creator
export const addBooks = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBooks = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default booksReducer;
