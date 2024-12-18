import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all", 
  color:[],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload; 
    },
    setFilterByColor:(state , action) => {
        state.color = [...state.color , action.payload];

    },
    removefilterfromList:(state , action) =>{
      state.color = state.color.filter((color) => color !== action.payload);
    }
  },
});

export const { setFilter , setFilterByColor , removefilterfromList } = filterSlice.actions;
export default filterSlice.reducer;
