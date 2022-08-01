import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../store/booksSlice";
const Book = () => {
    const dispatch = useDispatch();

    const deleteBook = (id) => {
        console.log(id);
        dispatch(removeBook({ id }))
    }

    const books = useSelector(state => state.books.books)
    return <>
        {books.map(book =>
            <li key={book.id} className="book-element" >
                <h2 className="book-title">{book.text}</h2>
                <h3 className="book-author">{book.author}</h3>
                <p className="book-about">{book.info}</p>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
        )}
    </>
};

export default Book;
