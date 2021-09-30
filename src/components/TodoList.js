import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {

    return (
        <ul className="todo__list">
            {props.filteredTodos.map(todo => (
                <Todo setTodos={props.setTodos} todos={props.todos} todo={todo} text={todo.text} key={todo.id}/>
            ))}
        </ul>
    )
}

export default TodoList;