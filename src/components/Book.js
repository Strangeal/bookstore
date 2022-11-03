import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="submit">remove</button>
    </li>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
