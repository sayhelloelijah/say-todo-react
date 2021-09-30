import React from 'react';

const Todo = (props) => {
    function removeLocalTodos(todo) {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        const todoIndex = todo.children[0].innerText;
        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    const deleteHandler = (e) => {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
    };

    const completeHandler = () => {
        props.setTodos(props.todos.map(item => {
            if(item.id === props.todo.id) {
                return {...item, completed: !item.completed}
            }

            return item;
        }));
    };

    return(
    //     <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>{props.text}
    //     <button onClick={completeHandler} className="complete-btn">
    //         <i className="fas fa-check"></i>
    //     </button>
    //     <button onClick={deleteHandler} className="trash-btn">
    //         <i className="fas fa-trash"></i>
    //     </button>
    // </li>

<li className={`todo__list-item ${props.todo.completed ? "todo__list-item--done" : ""}`} onClick={completeHandler} >
{props.text}
<svg className="todo__list-item-svg" onClick={deleteHandler} version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 59 59" style={{enableBackground: "new 0 0 59 59"}}>
  <g><path d="M29.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C28.5,50.553,28.948,51,29.5,51z"/>
  <path d="M19.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C18.5,50.553,18.948,51,19.5,51z"/>
  <path d="M39.5,51c0.552,0,1-0.447,1-1V17c0-0.553-0.448-1-1-1s-1,0.447-1,1v33C38.5,50.553,38.948,51,39.5,51z"/>
  <path d="M52.5,6H38.456c-0.11-1.25-0.495-3.358-1.813-4.711C35.809,0.434,34.751,0,33.499,0H23.5c-1.252,0-2.31,0.434-3.144,1.289 C19.038,2.642,18.653,4.75,18.543,6H6.5c-0.552,0-1,0.447-1,1s0.448,1,1,1h2.041l1.915,46.021C10.493,55.743,11.565,59,15.364,59 h28.272c3.799,0,4.871-3.257,4.907-4.958L50.459,8H52.5c0.552,0,1-0.447,1-1S53.052,6,52.5,6z M21.792,2.681 C22.24,2.223,22.799,2,23.5,2h9.999c0.701,0,1.26,0.223,1.708,0.681c0.805,0.823,1.128,2.271,1.24,3.319H20.553 C20.665,4.952,20.988,3.504,21.792,2.681z M46.544,53.979C46.538,54.288,46.4,57,43.636,57H15.364 c-2.734,0-2.898-2.717-2.909-3.042L10.542,8h37.915L46.544,53.979z"/>
  </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>
</li>
    );
}

export default Todo;