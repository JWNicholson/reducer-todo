import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
             <TextField id="standard-basic" label="your todo here"  
                  type="text"
                  name="userInput"
                  value={this.state.userInput}
                  onChange={this.changeHandler}
             />
             <Button variant="outlined" color="primary" type="submit">Add a To-do</Button>
            </form>
            <Button variant="contained" color="secondary" onClick={this.props.deleteHandler}>Delete finished</Button>
        </div>
    )
 }

}
export default TodoForm;