import React,{useState, ChangeEvent,FormEvent} from 'react';
import './AddTodoItem.css';
interface AddTodoFormProps{
  addTodo:(todo:string) => void;
}

const AddTodoItem:React.FC<AddTodoFormProps> = ({addTodo}) =>{

  const [newTodo, setNewTodo] = useState('');

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    setNewTodo(event.target.value)
  }
  return(
    <React.Fragment>
      <form onSubmit={onSubmitHandler} className="block__form">
        <input placeholder="Type something Todo" type="text" value={newTodo} onChange={onChangeHandler}/>
        <button type="submit">ADD</button>
      </form>
    </React.Fragment>
  );
}

export default AddTodoItem;
