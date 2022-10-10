import React from "react";

function Book({ book, updateBooks }) {
  const onChangeBook = (newShelf) => {
    updateBooks(book, newShelf);
    console.log(`Changing ${book.title} to shelf ${newShelf}`);
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={book.shelf}
              onChange={(e) => onChangeBook(e.target.value)}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors?.map((author, index, array) =>
            index === array.length - 1 ? author : author + ", "
          )}
        </div>
      </div>
    </li>
  );
}

export default Book;
