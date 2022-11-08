import { useDispatch } from 'react-redux';
import { addBooks } from '../redux/books/books';

const BookForm = () => {
  // const inputValue = useSelector((state) => (state.books));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBooks(e.target.title.value, e.target.author.value));
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <div className="form__group">
          <input type="text" name="title" placeholder="Book title" />
        </div>
        <div className="form__group">
          <input type="text" name="author" placeholder="Book author" />
        </div>
        <button type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
// onChange={(e) => dispatch(addBooks(e.target.value))}
export default BookForm;
