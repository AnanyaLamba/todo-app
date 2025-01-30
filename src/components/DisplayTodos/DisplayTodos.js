import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleStatus,
  setColor,
} from "../../features/todo/todoSlice";
import {selectStatusAndColorFilterTodos} from "../../features/filter/filterSlice"
import { Button } from "../Buttons/Buttons";
import Input from "../Input/Input";
import { colorOptions } from "../../utils/dropdownOptions";

const DisplayTodos = () => {
  const allTodos = useSelector(selectStatusAndColorFilterTodos);
  const dispatch = useDispatch();

  const [editableTodoId, setEditableTodoId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (todo) => {
    setEditableTodoId(todo.id);
    setUpdatedTitle(todo.title);
  };

  const handleUpdateTodo = () => {
    if (updatedTitle.trim() === "") {
      return;
    }
    dispatch(updateTodo({ id: editableTodoId, newTitle: updatedTitle }));
    setEditableTodoId(null);
    setUpdatedTitle("");
  };
  
  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      handleUpdateTodo()
    }
  }

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleColorChange = (id, color) => {
    dispatch(setColor({ id, color }));
  };

  return (
    <div className="mt-4 min-h-[40vh] border-t border-gray-300">
      {allTodos.length > 0 ? (
        allTodos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center py-2 px-4 border-b border-gray-300"
          >
            {editableTodoId === todo.id ? (
              <Input
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <div className="flex items-center justify-center gap-x-2">
                <button
                  className="pt-1"
                  onClick={() => handleToggleStatus(todo.id)}
                >
                  {todo.completed ? (
                    <i className="fi fi-rs-check-circle text-green-500"></i>
                  ) : (
                    <i className="fi fi-ts-circle"></i>
                  )}
                </button>
                <p>{todo.title}</p>
              </div>
            )}

            <div className="flex items-center gap-x-2">
              <select
                value={todo.color || ""}
                onChange={(e) => handleColorChange(todo.id, e.target.value)}
                className="mr-2 px-2 py-1 border rounded-md font-medium"
                style = {{color: todo.color}}
              >
                <option value=""></option>
                {colorOptions.map((color) => (
                  <option
                    key={color.value}
                    value={color.value}
                    className="text-black"
                  >
                    {color.name}
                  </option>
                ))}
              </select>

              {editableTodoId === todo.id ? (
                <Button type="save" onClick={() => handleUpdateTodo()} />
              ) : (
                <Button type="edit" onClick={() => handleEditTodo(todo)} />
              )}
              <Button type="delete" onClick={() => handleRemoveTodo(todo.id)} />
            </div>
          </div>
        ))
      ) : (
        <div className="px-4 text-center font-medium text-red-600">
          No Todos To Display . . .
        </div>
      )}
    </div>
  );
};

export default DisplayTodos;
