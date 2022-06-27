import React from "react";
import Todo from './Components/Todo'
const TodoList = ()=>{
    return(
      <div className="todo-container">
        <ul className="todo-list"></ul>
        <Todo />
      </div>
    )
}
export default TodoList