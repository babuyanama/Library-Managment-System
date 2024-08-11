import React, { useState } from 'react';
import './AddBook.css';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add book to the list (mocked here)
        console.log('Book added:', { title, author });
    };

    return (
        <div className="AddBook">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Book Title" 
                    required 
                />
                <input 
                    type="text" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    placeholder="Author" 
                    required 
                />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;
