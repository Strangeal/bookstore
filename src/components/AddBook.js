import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const AddBook = () => {
  const books = [{ id: 1, title: 'amaxing book', author: 'Jane Doe' }];
  return (
    <div>
      {books.map(({ title, author, id }) => (
        <Book title={title} author={author} key={id} />
      ))}
      <BookForm />
    </div>
  );
};

export default AddBook;
