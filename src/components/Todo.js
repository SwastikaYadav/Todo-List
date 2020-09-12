import React from 'react';


const Todo = ({text, todo, todos, setTodos}) => {
    //events
    const deleteHandler = (id) => {
       setTodos(todos.map(todo => {
           if (todo.id === id){
               todo.status = !todo.status
           }
           return todo;
       }));
       console.log(todo);
    };
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>
        
    );

};










export default Todo;
