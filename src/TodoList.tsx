import React from 'react'
import TodoListItem from './TodoListItem';
import './TodoList.css'

type Todo = {
  text:string;
  complete:boolean;
}

interface TodoListProps{
  todos:Array<Todo>;
  toggleTodo:(selectedTodo:Todo)=>void;
  removeTodo:(todoIndex:number)=>void;
}

const TodoList:React.FC<TodoListProps> = ({todos, toggleTodo, removeTodo}) => {
  return (
    <div className="card__content">
        <h1>Todo</h1>
        <ul>
          {todos.map((todo,index) =>{
            return <TodoListItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} key={index} todoIndex={index}/>
          })}
        </ul>
    </div>
  )
}

export default TodoList

