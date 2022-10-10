import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Shelf from "./Shelf";
import { useDebounce } from "use-debounce";

function Search() {
  const [books, setBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 500);
  useEffect(() => {
    console.log(`search query: ${debouncedQuery}`);
    if (debouncedQuery === "") {
      setSearchResults([]);
    } else {
      searchBooks(debouncedQuery);
    }
  }, [debouncedQuery]);

  const getBooks = () => BooksAPI.getAll().then((resp) => setBooks(resp));
  const searchBooks = (query) => {
    BooksAPI.search(query)
      .then((result) => {
        if (result?.error) {
          setSearchResults([]);
        } else {
          result = result.map((book) => {
            const currentShelf = books.find(
              (matchingBook) => matchingBook.id === book.id
            )?.shelf;
            book.shelf = currentShelf || "none";
            return book;
          });

          setSearchResults(result);
        }
      })
      .catch(() => {
        setSearchResults([]);
      });
  };

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
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <Shelf books={searchResults} updateBooks={updateBooks} />
      </div>
    </div>
  );
}

export default Search;
