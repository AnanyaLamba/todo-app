import { createSlice } from "@reduxjs/toolkit";
import { selectAllTodos } from "../todo/todoSlice";

const initialState = {
  status: "All",
  coloredTodos: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    addColorFilter : (state, action)=>{
        if(!state.coloredTodos.includes(action.payload)){
            state.coloredTodos.push(action.payload);
        }
    },
    removeColorFilter : (state, action)=>{
        state.coloredTodos = state.coloredTodos.filter((color)=> color !== action.payload)
    }
  },
});

const todoFilterMethods = {
  All: (todos) => todos,
  Active: (todos) => todos.filter((todo) => !todo.completed),
  Completed: (todos) => todos.filter((todo) => todo.completed),
};
export const StatusFilterKeys = Object.keys(todoFilterMethods);

export const selectStatusAndColorFilterTodos = (state) => {
  const currentAllTodos = selectAllTodos(state);
  const currentFilter = state.filter.status;
  const selectedColors = state.filter.coloredTodos;

  // First, filter by status
  let filteredTodos = todoFilterMethods[currentFilter](currentAllTodos);

  // Then, filter by selected colors
  if (selectedColors.length > 0) {
    filteredTodos = filteredTodos.filter((todo) =>
        selectedColors.includes(todo.color)
    );
  }

  return filteredTodos;
};

export const selectCurrentSelectedFilter = (state) => state.filter.status;

export const { setStatusFilter, addColorFilter, removeColorFilter } = filterSlice.actions;
export default filterSlice.reducer;
