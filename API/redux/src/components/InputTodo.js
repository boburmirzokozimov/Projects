import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const InputTodo = ({ text, setText}) => {

    const dispatch = useDispatch()

    const addTask = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text }))
        setText('')
    }

    const submitHandler = (e) => {
        setText(e.target.value)
    }

    return <div className="container">
        <form onSubmit={addTask} className="center">
            <input value={text} onChange={submitHandler} />
            <button onClick={addTask}>Add</button>
        </form>
    </div>;
};

export default InputTodo;
