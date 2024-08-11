import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import './BookList.css';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch the list of books from the backend (mocked here for simplicity)
        setBooks([
            { id: 1, title: 'Book One', author: 'Author One' },
            { id: 2, title: 'Book Two', author: 'Author Two' },
        ]);
    }, []);

    return (
        <div className="BookList">
            <h2>Book List</h2>
            {books.map(book => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    );
}

export default BookList;
