import React, { useState, useEffect } from 'react'
import Form from './component/Form'
import './App.css'
import ToDoLists from './component/ToDoLists'

function App() {
    //USE STATE
    const [userInput, setUserInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([])
    //USE EFFECT
    useEffect(() => {
        filteredHandler()
    }, [todos, status])
    const filteredHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => { return (todo.completed === true) }))
                break
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => { return (todo.completed === false) }))
                break
            default:
                setFilteredTodos(todos)
                break
        }
    }

    return (
        <div className="App">
            <header>
                Bob's ToDoList
            </header>
            <Form filterHandler={filteredHandler} setStatus={setStatus} todos={todos} setTodos={setTodos} setUserInput={setUserInput} userInput={userInput} />
            <ToDoLists filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
        </div>
    )
}

export default App