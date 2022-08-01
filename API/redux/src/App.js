import React from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { useState } from 'react'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <InputTodo text={text} setText={setText} />
      <TodoList text={text} />
    </div>
  );
}

export default App;
