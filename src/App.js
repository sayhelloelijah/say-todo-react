import { useState, useEffect } from 'react';
import './sass/app.scss';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('uncompleted');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [openState, setOpenState] = useState("");
  const dte = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const time = {
    date: dte.getDate(),
    day: days[dte.getDay()],
    month: months[dte.getMonth()],
    year: dte.getFullYear()
  };

  const openStateHandler = () => {
      setOpenState(!openState);
  }

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="todo todo--react">
      <header className="todo__header">
        <h1 className="todo__heading">say-todo-react</h1>
        <section className="todo__date">
            <div className="todo__date-mdy">
              <span className="todo__date-date">{time.date}</span>
              <div className="todo__date-my">
                  <span className="todo__date-month">{time.month}</span>
                  <span className="todo__date-year">{time.year}</span>
              </div>
          </div>
          <span className="todo__date-day">{time.day}</span>
        </section>
      </header>
      <button type="button" className="todo__add-task" tabIndex="1" title="Add New Task" onClick={openStateHandler}>
        <svg className="todo__add-task-svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 52 52" style={{enableBackground:"new 0 0 52 52"}}>
          <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2 s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2 S39.604,28,38.5,28z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
      </button>
      <Form openState={openState} setOpenState={setOpenState} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos}  filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
