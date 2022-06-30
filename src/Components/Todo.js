import React from 'react'

const Todo=({text,todos, todo, setTodos})=>{
    // const completeHandler = ()=>{
    //     setTodos(todos.map((item)=> {
    //       if(item.id === todo.id){
    //           return{...item, completed: !item.completed}
    //       }
    //     })
    //   },
    const deleteHandler = ()=>{
     setTodos(todos.filter((ele)=> ele.id !== todo.id))
    }
    // const completeHandler = ()=>{
    //     setTodos(todos.map((ele)=> ele.id !== todo.id))
    //    }
   
    
    return(
        <div className='todo'>
        <li className='todo-item'>
        {text}
        </li>
        {/* <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button> */}
        <button onClick={deleteHandler} className='trash-btn'><i className='fas fa-trash'></i></button>
        </div>
    )
}
export default Todo;