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
     <TodoList setTodos={setTodos} todos={todos} inputText={inputText}/>
     <div className='footer'>
      {/* All Right Reserved. 2022 */}
     </div>
    </div>
  )
}

export default App