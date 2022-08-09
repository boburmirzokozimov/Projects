import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        completed: false
    },
    reducers: {
        addBook(state, action) {
            state.books.push({
                id: Math.random(),
                text: action.payload.text,
                info: action.payload.info,
                about: action.payload.about,
            })
        },
        removeBook(state, action) {
            state.books = state.books.filter(book => book.id !== action.payload.id)
        },
        finishedBook(state, action) {
            state.books.find(book => book.id = action.payload.id ? book.completed = !book.completed : !book.completed)
         }
    }
})

export const { addBook, removeBook, finishedBook } = bookSlice.actions

export default bookSlice.reducer