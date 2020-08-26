import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class NewTodoForm extends Component {
    state = { text: '' }

    handleChange = (evt) => {
        this.setState({[evt.target.name]:evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuidv4()};
        this.props.addTodo(newTodo);
        this.setState({text: ''});
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="todo">ACTIVITY</label>
                <input type="text" value={this.state.text} id="todo" name="text" onChange={this.handleChange}></input>
                <button class="submit-button">ADD</button>
            </form>
         );
    }
}
 
export default NewTodoForm;