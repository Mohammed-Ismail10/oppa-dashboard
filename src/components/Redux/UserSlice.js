import { createSlice } from "@reduxjs/toolkit";


let initialState = { username: null };



let userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUsername: (initialState, { payload }) => {
      initialState.username = payload;
      // console.log(initialState.username);
    },

  }
});


export let userReducer = userSlice.reducer;
export let { saveUsername } = userSlice.actions;