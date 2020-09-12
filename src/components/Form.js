import React from 'react';
import Todolist from './Todolist';


const Form = ({setinputText, inputText, todos, setTodos}) =>{

    //Javascript code
    const inputTextHandler = (e) => {
        setinputText(e.target.value);
    };
    const submitTodo = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, 
            { text: inputText, completed: false, id: Math.random()* 100},
        ]);
        setinputText("");

    };
    return(
        <form>
            <input value={inputText}onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodo}><i className="fas fa-plus-square"></i></button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all" selected>All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
                
            </div>
        </form>

    );
};

export default Form;