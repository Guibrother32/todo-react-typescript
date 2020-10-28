import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoItem from './AddTodoItem';
import './App.css';
import tago from './images/tago.png';
import gb32 from './images/gb32.png';

type Todo = {
  text: string;
  complete: boolean;
};

const initialTodos: Array<Todo> = [
  { text: 'Make coffee', complete: false },
  { text: 'Do laundry', complete: true },
];

const App: React.FC = () => {
  //React.FunctionComponent

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    let todoList = localStorage.getItem('todoList');
    if (todoList) {
      setTodos(JSON.parse(todoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    if (newTodo.trim() !== '') {
      const newTodos = [...todos];
      newTodos.push({ text: newTodo, complete: false });
      setTodos(newTodos);
    }
  };

  const removeTodo = (tudoIndex: number) => {
    const newTodos = [...todos];
    newTodos.splice(tudoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <h1 className="title__welcome">Todo App made for TagoIO</h1>
      <div className="card">
        <img alt="tagoLogo" src={tago} className="logo__tago" />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
        <AddTodoItem addTodo={addTodo} />
      </div>
      <h1 className="title__cheering">Thanks for the opportunity</h1>
      <a href="https://guilhermeco.com/">
        <img alt="tagoLogo" src={gb32} className="logo__gb32" />
      </a>
    </React.Fragment>
  );
};

export default App;
