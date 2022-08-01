import React, { useReducer, useContext } from 'react';
import './App.css';
import UseReducerB from './components/UseReducerB';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        Count : {count}
        <UseReducerB />
      </CountContext.Provider>
    </div>
  )
}

export default App;
