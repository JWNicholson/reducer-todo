import React from "react";

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: ""
        }
    }

    changeHandler = event => {
        this.setState({userInput: event.target.value})
    }

    
    submitHandler = event => {
        event.preventDefault();
       this.props.addTodoList(this.state.userInput)
        this.setState({userInput:""})

    }
  
render(){
      return (
        <div>
            <form onSubmit={this.submitHandler}>
            <input 
            type="text"
            name="userInput"
            value={this.state.userInput}
            onChange={this.changeHandler}
             />
             <button type="submit">Add a To-do</button>
            </form>
            <button onClick={this.props.deleteHandler}>Delete finished To-dos</button>
        </div>
    )
 }

}
export default TodoForm;