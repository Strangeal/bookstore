const BookForm = () => (
  <div className="form__container">
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="form__group">
        <input type="text" name="title" placeholder="Book title" />
      </div>
      <div className="form__group">
        <input type="text" name="author" placeholder="Book author" />
      </div>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default BookForm;
