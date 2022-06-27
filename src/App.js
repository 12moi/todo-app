import React, {useState} from 'react'
import './App.css'

import Form from './Components/Form'
import TodoList from './Components/TodoList'
function App() {
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]=useState([])
  return (
    <div className='App'>
     <header><h1>Moi's Todo List </h1></header>
     <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
     <TodoList  inputText={inputText}/>
    </div>
  )
}

export default App