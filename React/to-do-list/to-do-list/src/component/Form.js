import React from 'react';

function Form({filteredHandler, setStatus, userInput, setUserInput, setTodos, todos }) {
    const inputTextHandler = (e) => {
        setUserInput(e.target.value);
    };
    const createTaskHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                input: userInput,
                id: Math.random(),
                completed: false,
            },
        ]);
        setUserInput('');
    };
    const filterHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <div>
            <form>
                <input value={userInput} onChange={inputTextHandler} type="text" />
                <button onClick={createTaskHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={filterHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Comlpeted</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;
