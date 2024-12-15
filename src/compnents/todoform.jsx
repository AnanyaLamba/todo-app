import react , {useState} from "react";
import {useSelector , useDispatch } from "react-redux";
import { addTodo , deleteTask , toggleTodo } from "../slices/todoslice";

const TodoForm = () => {
  const tasklist = useSelector((state) => state.todos.tasklist);
  const dispatch = useDispatch();
  const [input , setInput] = useState("");

  function handleSubmit (e){
    e.preventDefault();
    if(input.trim())
    {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  function handleDelete(id){
    dispatch(deleteTask(id));
  }

  function handleToggle(id){
    dispatch(toggleTodo(id));
  }


  return ( 
    <div>
      <h2>Todo</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          placeholder="Write your tasks"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Add todo</button>
      </form>

      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => handleToggle(todo.id)}>
              {todo.completed ? "Completed" : "Uncompleted"}
            </button>
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.task}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
   );
}
 
export default TodoForm;
