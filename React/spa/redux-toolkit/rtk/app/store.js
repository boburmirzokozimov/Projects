const configerStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userSlice = require('../features/userSlice')

const logger = reduxLogger.createLogger()

const store = configerStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        users: userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store