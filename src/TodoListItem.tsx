import React from 'react'
import './TodoListItem.css'

interface TodoListItemProps{
  todo:{
    text:string;
    complete:boolean;
  },
  toggleTodo: (selected:Todo) => void;
}

type Todo = {
  text:string;
  complete:boolean;
}

const TodoListItem:React.FC<TodoListItemProps> = ({todo, toggleTodo}) => { //FC<propsType>
  return (
    <li className="list__item">
      <label className="list__item--title" style={todo.complete ? {textDecoration:'line-through'} : undefined}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
        {todo.text}
      </label>
    </li>
  )
}

export default TodoListItem
