import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookApi, deleteBook } from '../redux/books/books';

const Book = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);

  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map(({ title, author, itemId }) => (
        <li key={itemId}>
          <h3>{title}</h3>
          <p>{author}</p>
          <button type="submit" onClick={() => dispatch(deleteBook(itemId))}>
            remove
          </button>
        </li>
      ))}
    </div>
  );
};

export default Book;
