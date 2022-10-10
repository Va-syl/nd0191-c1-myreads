import React from "react";
import Book from "./Book";

function Shelf({ name, books, updateBooks }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books?.map((book) => (
            <Book key={book.id} book={book} updateBooks={updateBooks} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
