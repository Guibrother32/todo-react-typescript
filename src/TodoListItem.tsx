import React from 'react'
import './TodoListItem.css'
import closeTag from './images/close.svg' 

interface TodoListItemProps{
  todo:{
    text:string;
    complete:boolean;
  },
  toggleTodo: (selected:Todo) => void;
  removeTodo: (todoIndex:number) => void;
  todoIndex:number;
}

type Todo = {
  text:string;
  complete:boolean;
}

const TodoListItem:React.FC<TodoListItemProps> = ({todo, toggleTodo, removeTodo, todoIndex}) => { //FC<propsType>
  console.log(todo)
  return (
    <li className="list__item">
      <label className="list__item--title" style={todo.complete ? {textDecoration:'line-through'} : undefined}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
        {todo.text}
      </label>
      <img alt="closeTag" src={closeTag} onClick={() => removeTodo(todoIndex)}/>
    </li>
  )
}

export default TodoListItem
