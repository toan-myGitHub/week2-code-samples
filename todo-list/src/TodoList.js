import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    /**
     * This is optional, but if you need to do things in a 
     * constructor, you can define a React constructor like so
     */
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    addTodo = (event) => {
        if (this.state.newTodo === '') {
            alert('Please enter something');
            return;
        }

        this.setState(prevState => {
            return {
                // todos: prevState.todos.concat(['new todo'])
                todos: [...prevState.todos, prevState.newTodo],
                newTodo: ''
            };
        });
    }

    onChange = (event) => {
        const newTodo = event.target.value;
        this.setState(prevState => {
            return {
                newTodo: newTodo
            };
        })
    }

    render() {
        const todoItems = this.state.todos
            .map((t, idx) => <TodoItem todo={t} key={idx} />);

        return (
            <div>
                <label htmlFor="new-todo">Add Todo</label>
                <input
                    id="new-todo"
                    onChange={this.onChange}
                    value={this.state.newTodo}
                />
                <button onClick={this.addTodo}>Add</button>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
}

export default TodoList;