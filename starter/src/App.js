import "./App.css";
import React, { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import { Routes, Route } from "react-router-dom";
import Library from "./components/Library";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => BooksAPI.getAll().then((resp) => setBooks(resp));

  const updateBooks = (changedBook, newShelf) => {
    console.log("changing to " + newShelf);
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
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Library books={books} updateBooks={updateBooks} getBooks={getBooks} />}
        />
        <Route
          path="/search"
          element={<Search books={books} updateBooks={updateBooks} getBooks={getBooks}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
