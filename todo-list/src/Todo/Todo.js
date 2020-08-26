import React, { Component } from 'react';
import UpdateTodoForm from '../UpdateTodoForm/UpdateTodoForm';
class Todo extends Component {
    state = { isEditing: false, completed: false}

    showForm = () => {
        this.setState({isEditing: !this.state.isEditing,
                        newValue: this.props.todo.text});
    }

    hideForm = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    completeTask = () => {
        this.setState({completed: !this.state.completed});
    }

    render() { 
        return ( 
        <div className="Todo-container">
            {!this.state.isEditing && <p 
            className={this.state.completed ? "Todo-text completed" :"Todo-text"} 
            onClick={this.completeTask}>
                {this.props.todo.text}</p>}
            {!this.state.isEditing && <div className="Todo-buttons">
            <button onClick={this.showForm} className="edit-button">EDIT</button>
            <button onClick={()=> this.props.delete(this.props.todo.id)} className="delete-button">DELETE</button>
                </div>}
            {this.state.isEditing && <UpdateTodoForm
                 update={this.props.update}
                 todo={this.props.todo}
                 edit={this.state.isEditing}
                 hide={this.hideForm}/>}
        </div>
        );
    }
}
 
export default Todo;