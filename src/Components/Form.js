import React from "react"

const Form = () =>{
    return(
        <form>
        <input type="text" ClassName="todo-input" />
        <button ClassName="todo-button" type="submit">
          <i ClassName="fas fa-plus-square"></i>
        </button>
        <div ClassName="select">
          <select name="todos" ClassName="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );

    
}
export default Form