import React, {useState, useReducer} from "react";
import Todo from "./Todo";
import {intialState, todoReducer} from "../reducers/Reducers";
import TodoForm from "../components/TodoForm";

const TodoList = () => {
const [state,dispatch] = useReducer(todoReducer,intialState)

const addTodoList = data => {
    
    const newTodo= ({
        item:data,
        completed: false,
        id: Date.now(),
    }) 
  
    dispatch({type:"ADD_TODO", payload:newTodo})
}

const toggleTodo = todoId => {
          
dispatch({type: "TOGGLE_TODO", payload:todoId} )
               
}

const deleteHandler = event => {
    event.preventDefault();
    console.log("delete handler signal")
    dispatch({type: "DELETE_TODO"})
   }

console.log(state)

 return (
     <div className= "mainDiv"> 
      <TodoForm addTodoList={addTodoList} deleteHandler={deleteHandler} />   
     {state.map(item => {
         return <Todo todo={item} key={item.id} toggleTodo={toggleTodo} />
     })}
     </div>
     )    
}

export default TodoList;