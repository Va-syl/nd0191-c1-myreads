import React, { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

function Myreads() {
  const [books, setBooks] = useState([]);

  const getBooks = () => BooksAPI.getAll().then((resp) => setBooks(resp));

  useEffect(() => {
    getBooks();
  }, []);

  const updateBooks = (changedBook, newShelf) => {
    const newBooks = books.map((book) => {
      if (book.id === changedBook.id) {
        book.shelf = newShelf;
      }
      return book;
    });
    setBooks(newBooks);

    BooksAPI.update(changedBook, newShelf);
  };

  return (
    <div className="list-books">
      <div className="list-books-content">
        <Shelf
          name="Currently Reading"
          books={books.filter((book) => book.shelf === "currentlyReading")}
          updateBooks={updateBooks}
        />
        <Shelf
          name="Want To Read"
          books={books.filter((book) => book.shelf === "wantToRead")}
          updateBooks={updateBooks}
        />
        <Shelf
          name="Read"
          books={books.filter((book) => book.shelf === "read")}
          updateBooks={updateBooks}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
export default Myreads;
