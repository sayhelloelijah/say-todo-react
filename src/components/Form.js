import React from "react";

const Form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        props.setTodos([...props.todos, {
            text: props.inputText,
            completed: false,
            id: Math.floor(Math.random() * 1000)
        }]);

        props.setInputText("");
        props.setOpenState(false);
    }
    
    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    }

    const openStateHandler = () => {
        props.setOpenState(!props.openState);
    }

    return (
        // <form>
        //     <input value={props.inputText} type="text" className="todo-input" onChange={inputTextHandler} />
        //     <button className="todo-button" type="submit" onClick={submitTodoHandler} >
        //         <i className="fas fa-plus-square"></i>
        //     </button>
        //     <div className="select">
        //         <select name="todos" className="filter-todo" onChange={statusHandler}>
        //             <option value="all">All</option>
        //             <option value="completed">Completed</option>
        //             <option value="uncompleted">Uncompleted</option>
        //         </select>
        //     </div>
        // </form>
        
        <dialog open={props.openState} className="todo__dialog">
            <form className="todo__dialog-form" method="dialog">
                <label className="todo__dialog-label" htmlFor="todo__question">Add a Task</label>
                <input type="text" className="todo__dialog-input" id="todo__question" value={props.inputText} onChange={inputTextHandler} placeholder="What's Going On?" />
                <menu className="todo__dialog-menu">
                    <button className="todo__dialog-confirm" value="default" onClick={submitTodoHandler}>Submit</button>
                </menu>
            </form>
            <button className="todo__dialog-close" title="Close Modal" onClick={openStateHandler}>&times;</button>
        </dialog>
    );
};

export default Form;
