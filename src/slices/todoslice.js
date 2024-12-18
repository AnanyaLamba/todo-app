import {createSlice} from "@reduxjs/toolkit";

const generateNewId = (expenses) => {
    let newId = -1;
    expenses.forEach(ele => {
        newId = Math.max(newId, ele.id);
    });
    return newId + 1;
}

const todoSlice  = createSlice({
    name:"todos",
    initialState:{
        tasklist: 
        [
        {
            id:0 , task: "todo" , status:"completed" , color:"default"
        },
        {
            id:1 , task:"react" , status:"incompleted" , color:"default"
        },
        {
            id:2 , task:"soup" , status:"completed" , color:"default"
        }
        ],
    }, 

    reducers:{
        addTodo:(state , action) =>{
            const newTodo = {
                id:generateNewId(state.tasklist),
                task:action.payload,
                completed:false,
                
            };
            // all the entery are pushed into tasklist array in this format
            state.tasklist.push(newTodo);
        },

        deleteTask:(state , action) =>{
            state.tasklist = state.tasklist.filter((task) => task.id !== action.payload)
        },

        toggleTodo:(state , action) =>{
            const todo = state.tasklist.find((task) => task.id === action.payload) 
            if(todo)
            {
                todo.completed = !todo.completed;
            }
        },
        markAllCompleted:(state) =>{
            state.tasklist.forEach((task) =>{
                task.completed = true
            });
        },
        clearCompleted:(state) =>{
            state.tasklist = state.tasklist.filter((task) => !task.completed);
        },
        updatedColor:(state , action) =>{
            const{id , color} = action.payload;
            const task = state.tasklist.find((task) => task.id === id);
            if(task)
            {
                task.color = color;
            }
        }
    },
});

export const {addTodo , deleteTask , toggleTodo , markAllCompleted , clearCompleted , updatedColor} = todoSlice.actions;

export default todoSlice.reducer;