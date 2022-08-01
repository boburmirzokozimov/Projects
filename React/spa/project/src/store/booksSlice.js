import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: []
    },
    reducers: {
        addBook(state, action) {
            state.books.push({
                id: Math.random(),
                text: action.payload.text,
                author: action.payload.author,
                info: action.payload.info,
            })
        },
        removeBook(state, action) {
            state.books = state.books.filter(book => book.id !== action.payload.id)
        },
        toggleBook() { }
    }
})

export const { addBook, removeBook, toggleBook } = bookSlice.actions

export default bookSlice.reducer