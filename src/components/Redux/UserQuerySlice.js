import { createSlice } from "@reduxjs/toolkit";


let initialState = { data: [] };



let userQuerySlice = createSlice({
  name: 'userQuery',
  initialState,
  reducers: {
    saveData: (initialState, { payload }) => {
      initialState.data = payload;
      // console.log(initialState.data);
    }

  }
});


export let userQueryReducer = userQuerySlice.reducer;
export let { saveData } = userQuerySlice.actions;