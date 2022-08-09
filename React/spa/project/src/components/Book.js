import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook, finishedBook } from "../store/booksSlice";
const Book = () => {
    const dispatch = useDispatch();

    const deleteBook = (id) => {
        console.log(id);
        dispatch(removeBook({ id }))
    }

    const toggleBook = (id) => {
        dispatch(finishedBook({ id }))
    }

    const books = useSelector(state => state.books.books)
    return <>
        {books.map(book =>
            <li key={book.id} className={book.completed ? 'book-element-finished' : null} >
                <h2 className="book-title">{book.text}</h2>
                <h3 className="book-author">{book.about}</h3>
                <p className="book-about">{book.info}</p>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button onClick={() => toggleBook(book.id)}>{book.completed ? 'Finished' : 'Continuer'}</button>
            </li>
        )}
    </>
};

export default Book;
