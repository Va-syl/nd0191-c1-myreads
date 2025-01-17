# MyReads Project

The Myreads application is a bookshelf app that allows the user to select and categorize books that he or she has read, is currently reading, or wants to read. The book library is made up of shelves which contain books.  The shelves are: 
- Currently Reading
- Want to Read
- Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. To keep the interface consistent, you may consider re-using some of the code you used to display the books on the main page.

## Getting Started
This application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

### Installing
- install all project dependencies
```
npm install
```
- start the development server 
```
npm start
```

## Components structure

```bash
    ├── components
    │   ├── Book.js # represents a book.  Displays information about book. 
    │   ├── Library.js # contains the users bookshelves.
    │   └── Search.js # allows the user to search for books and displays all book results
    │   └── Shelf.js # displays all the books in the specific book shelf
```

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the all the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Author
**Va-syl**
