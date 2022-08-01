import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {

    const [curState, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(res => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    })

    return <div>
        {curState.loading ? 'Loading' : curState.post.title}
        {curState.error ? curState.error : null}
    </div>;
}

export default DataFetchingTwo;
