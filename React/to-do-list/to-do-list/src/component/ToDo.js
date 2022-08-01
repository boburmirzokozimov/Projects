import React from 'react'

function ToDo({ todos, todo, id, setTodos }) {
    const deleteItemHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    const checkHandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item
            })
        )
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.input}</li>
            <button onClick={checkHandler}>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteItemHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default ToDo