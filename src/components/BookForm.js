import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category] = useState('Action');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const add = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addNewBook({ payload: add, dispatch }));
    setTitle('');
    setAuthor('');
  };

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'author') {
      setAuthor(value);
    }
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <div className="form__group">
          <input onChange={handleChange} value={title} type="text" name="title" placeholder="Book title" />
        </div>
        <div className="form__group">
          <input onChange={handleChange} value={author} type="text" name="author" placeholder="Book author" />
        </div>
        <button type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
