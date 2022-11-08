import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
// const INPUT_VALUE = 'bookstore/books/INPUT_VALUE';

const initState = [
  {
    id: uuidv4(),
    title: 'Rethinking Productivity in Software Engineering',
    author: 'Caitlin Sadowski, Thomas Zimmermann',
  },
  {
    id: uuidv4(),
    title: 'Pro Git',
    author: 'Scott Chacon and Ben Straub',
  },
  {
    id: uuidv4(),
    title: "You Don't Know JS Yet",
    author: 'Kyle Simpson',
  },
  {
    id: uuidv4(),
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
  },
  {
    id: uuidv4(),
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
  },
];

const booksReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => (book.id) !== action.id);

    default:
      return state;
  }
};

export const addBooks = (title, author) => ({
  type: ADD_BOOK,
  payload: {
    title,
    author,
  },
});

export const removeBooks = (id) => ({ type: REMOVE_BOOK, id });

export default booksReducer;
