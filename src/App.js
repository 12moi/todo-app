import React from 'react'
import './App.css'

import Form from './Components/Form'
import TodoList from './Components/TodoList'
function App() {
  return (
    <div className='App'>
     <header><h1>Moi's Todo List</h1></header>
     <Form />
     <TodoList />
    </div>
  )
}

export default App