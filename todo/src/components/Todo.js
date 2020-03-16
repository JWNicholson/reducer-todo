import React from "react";

const Todo = props => {

    const clickHandler = e => {
        props.toggleTodo(props.todo.id)
    }
    
    return (
        <div className={`item  ${props.todo.completed ? "completed" : ""}`}  onClick={clickHandler}>
            {props.todo.item}
        </div>
    )
}
export default Todo;