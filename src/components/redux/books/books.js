const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initState = [];

const booksReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        REMOVE_BOOK: [...state, action.book],
      };

    case REMOVE_BOOK:
      return state.filter((book) => (book.id) !== action.id);

    default:
      return state;
  }
};

export const addBooks = (book) => ({ type: ADD_BOOK, book });

export const removeBooks = (book) => ({ type: REMOVE_BOOK, book });

export default booksReducer;
