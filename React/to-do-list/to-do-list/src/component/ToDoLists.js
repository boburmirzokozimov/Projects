import React from 'react'
import ToDo from './ToDo'

function ToDoLists({ filteredTodos, todos, setTodos }) {
    return (
        <div className="todo-list-container">
            <ul className='todo-list'>
                {filteredTodos.map(todo => {
                    return <ToDo setTodos={setTodos} todo={todo} id={todo.id} key={todo.id} todos={todos} />
                })}
            </ul>
        </div>
    )
}

export default ToDoLists
