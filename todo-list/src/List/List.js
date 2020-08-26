import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from '../Todo/Todo';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
class List extends Component {
    state = { todoList:[] }

    addTodo = (todo) => {
        this.setState({todoList:[ ...this.state.todoList, todo ]})
    }

    deleteTodo = (id) => {
        this.setState({todoList: this.state.todoList.filter(todo=> todo.id !==  id)});
    }

    updateTodo = (id, newText) => {
        let list= this.state.todoList;
        list.splice(id, 1, {id: uuidv4(),text: newText});
        this.setState({todoList: list});
    }

    render() { 
        return (  
            <div>
                <h1>TODO LIST</h1>
                <p>write here the things you need to do.</p>
                <NewTodoForm addTodo={this.addTodo}/>
                {this.state.todoList.map((act, id) => 
                <Todo
                    key={act.id}
                    todo={act}
                    id={id}
                    delete={this.deleteTodo}
                    update={this.updateTodo}
                />)}
            </div>
        );
    }
}
 
export default List;