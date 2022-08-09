import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './booksSlice'
import infoReducer from './infoSlice'

export default configureStore({
    reducer: {
        books: bookReducer,
        info: infoReducer
    }
})