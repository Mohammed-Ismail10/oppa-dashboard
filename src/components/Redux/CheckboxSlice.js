import { createSlice } from "@reduxjs/toolkit";


let initialState = { finalInputsWillDelete: [] };



let checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    deleteInputs: (initialState, { payload }) => {
      initialState.finalInputsWillDelete = payload;
      console.log(initialState.finalInputsWillDelete);
    }
  }
});


export let checkboxReducer = checkboxSlice.reducer;
export let { deleteInputs } = checkboxSlice.actions;