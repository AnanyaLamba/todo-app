import react, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTask, toggleTodo , updatedColor } from "../../slices/todoslice";
import Footer from "../footer/Footer";
import "./todoform.css";
// import { filterSlice } from "../../slices/filterSlice";

const TodoForm = () => {
  const tasklist = useSelector((state) => state.todos.tasklist);
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  }

  function handleDelete(id) {
    dispatch(deleteTask(id));
  }

  function handleToggle(id) {
    dispatch(toggleTodo(id));
  }

  function handleUpdatedColor(id , color){
    dispatch(updatedColor({id , color}));
  }

  // function handleFilterByColor(id , color){

  // }

  const filterTasks = tasklist.filter((todo) =>{
    if(filter === "all") return true;
    if(filter === "active") return !todo.completed;
    if(filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <div className="todo-container">
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
          {filterTasks.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.color}`}>
              <button onClick={() => handleToggle(todo.id)}>
                {todo.completed ? "Completed" : "Uncompleted"}
              </button>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>
              <select name="color" id="color" value={todo.color} onChange={(e) =>handleUpdatedColor(todo.id , e.target.value)}>
                <option value="default">default</option>
                <option value="purple">purple</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
                <option value="red">red</option>
              </select>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer tasklist={tasklist} />
    </>
  );
};

export default TodoForm;
