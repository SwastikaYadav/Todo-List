import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {

  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
        <div className="full">
        <header>
          <h1>SWASTIKA'S TODO LIST! {inputText}</h1>
        </header>
        <Form 
        inputText= {inputText}
        todos = {todos}
        setTodos = {setTodos}
        setinputText= {setinputText}/>
        <Todolist todos={todos}/>
      </div>
    </div>

  );
}

export default App;
