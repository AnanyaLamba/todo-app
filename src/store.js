import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoslice';
import filterReducer from "./slices/filterSlice";

const store = configureStore({
    reducer:{
        todos: todoReducer,
        filter:filterReducer,
    },

})

export default store;