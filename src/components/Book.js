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
    <div className="books">
      {books.map(({
        title, author, itemId, category,
      }) => (
        <li key={itemId} className="book__li">
          <div>
            <h5>{category}</h5>
            <h3>{title}</h3>
            <p>{author}</p>
            <button type="submit" onClick={() => dispatch(deleteBook(itemId))}>
              <span> Remove</span>
              <span className="Line-2" />
              <span>Comment</span>
              <span className="Line-2" />
              <span>Edit</span>
            </button>
          </div>
          <div className="progress">
            <div className="Line-2" />

            <div>
              <p className="h4">CURRENT CHAPTER</p>
              <p>Introduction</p>
              <button type="submit">UPDATE PROGRESS</button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Book;
