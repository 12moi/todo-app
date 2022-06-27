import React, {useState} from 'react'
import './App.css'

import Form from './Components/Form'
import TodoList from './Components/TodoList'
function App() {
  const [inputText, setInputText]= useState("");
  const [todos, setTodos]=useState([])
  return (
    <div className='App'>
     <header><h3> Eng. Ann Wangui & Eng. Moi Shadrack Todo List </h3></header>
     <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
     <TodoList todos={todos} inputText={inputText}/>
    </div>
  )
}

export default App