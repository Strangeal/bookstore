import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const AddBook = () => {
  const displayBooks = useSelector((state) => state.books);
  return (
    <div>
      <Book displayBooks={displayBooks} />
      <BookForm />
    </div>
  );
};

export default AddBook;
