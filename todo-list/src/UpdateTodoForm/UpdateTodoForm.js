import React, { Component } from 'react';
class UpdateTodoForm extends Component {
    state = { newValue:this.props.todo.text }

    handleChange = (evt) => {
        this.setState({[evt.target.name]:evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.update(this.props.id, this.state.newValue);
        this.props.hide();
    }

    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                name="newValue" 
                value={this.state.newValue} 
                onChange={this.handleChange}>
            </input>
            <button className="update-button">SAVE</button>
        </form> );
    }
}
 
export default UpdateTodoForm;