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
            id:0 , task: "todo" , status:"completed"
        },
        {
            id:1 , task:"react" , status:"incompleted"
        },
        {
            id:2 , task:"soup" , status:"completed"
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
            // alll the entery are pushed into tasklist array in this format
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
    },
});

export const {addTodo , deleteTask , toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;