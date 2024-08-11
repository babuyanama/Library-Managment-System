import React from 'react';
import './BookItem.css';

function BookItem({ book }) {
    return (
        <div className="BookItem">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default BookItem;
