import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from "../store/todoSlice";
const Todo = (text) => {

    const todos = useSelector(store => store.todos.todos)

    const dispatch = useDispatch()
    const removeTask = (id) => {
        dispatch(removeTodo({ id }))
    }
    const toggleTask = (id) => {
        dispatch(toggleTodo({ id }))
    }

    return <div>
        <ul>
            {
                todos.map(todo => <li className="todo-list" key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTask(todo.id)} />
                    <p>{todo.text}</p>
                    <span style={{ color: 'red' }} onClick={() => removeTask(todo.id)} className="remove">&times;</span>
                </li>
                )
            }


        </ul>
    </div >;
};

export default Todo;
