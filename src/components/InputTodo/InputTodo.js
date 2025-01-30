import React, { useState } from "react";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

const InputTodo = () => {
  const [currentTask, setCurrentTask] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    if (e.key === "Enter" && currentTask.trim() !== "") {
      dispatch(addTodo(currentTask));
      setCurrentTask("");
    }
  };

  return (
    <Input
      value={currentTask}
      onChange={(e) => setCurrentTask(e.target.value)}
      placeholder="What needs to be done?"
      onKeyDown={addTodoHandler}
    />
  );
};

export default InputTodo;
