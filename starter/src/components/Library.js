import React, { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

function Library({books, updateBooks, getBooks}) {
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Shelf
          name="Currently Reading"
          books={books && books.filter((book) => book.shelf === "currentlyReading")}
          updateBooks={updateBooks}
        />
        <Shelf
          name="Want To Read"
          books={books && books.filter((book) => book.shelf === "wantToRead")}
          updateBooks={updateBooks}
        />
        <Shelf
          name="Read"
          books={books && books.filter((book) => book.shelf === "read")}
          updateBooks={updateBooks}
        />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
export default Library;
