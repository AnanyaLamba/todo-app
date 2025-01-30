import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks : [
        {id: 1, title: "Learn Redux", completed: false, color: ""},
        {id: 2, title: "Learn React", completed: false, color: ""},
        {id: 3, title: "Learn Node", completed: false, color: ""},
    ],

}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                title : action.payload
            }
            state.tasks.push(todo)
        },

        removeTodo : (state, action)=>{
            const selectedId = action.payload
            state.tasks = state.tasks.filter((todo)=> todo.id !== selectedId)
        },

        updateTodo: (state, action) => {
            const { id, newTitle } = action.payload; 
            const todoToUpdate = state.tasks.find((todo) => todo.id === id); 
            if (todoToUpdate) {
                todoToUpdate.title = newTitle; 
            }
        },

        toggleStatus : (state, action)=>{
            const selectedId = action.payload
            const todoToUpdate = state.tasks.find((todo) => todo.id === selectedId)
            if(todoToUpdate){
                todoToUpdate.completed = !todoToUpdate.completed
            }
        },

        setColor : (state, action)=>{
            const {id, color} = action.payload;
            const todoToUpdate = state.tasks.find((todo) => todo.id === id)
            if(todoToUpdate){
                todoToUpdate.color = color
            }
        },

        markAllCompleted: (state)=>{
            state.tasks.forEach((todo)=>{
                todo.completed = true
            })
        },
        
        clearAllCompleted: (state)=>{
            state.tasks = state.tasks.filter((todo)=> !todo.completed)
        },

    }

})


export const { addTodo, removeTodo, updateTodo, toggleStatus, setColor, markAllCompleted, clearAllCompleted } = todoSlice.actions; 

export default todoSlice.reducer;

export const selectPendingTodosCount = (state) => {
    return state.todos.tasks.filter((todo) => !todo.completed).length;
}

export const selectAllTodos = (state)=>{
    return state.todos.tasks;
}