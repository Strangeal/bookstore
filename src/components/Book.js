import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const Book = ({ displayBooks }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {displayBooks.map(({ title, author, id }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{author}</p>
          <button type="submit" onClick={() => dispatch(removeBooks(id))}>remove</button>
        </li>
      ))}
    </div>
  );
};

Book.propTypes = {
  displayBooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default Book;
