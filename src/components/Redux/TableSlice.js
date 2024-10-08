import { createSlice } from "@reduxjs/toolkit";


let initialState = { currentPage: 0 };



let tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    resetPage: (state) => {
      state.currentPage = 0;
    },
    increasePage: (state) => {
      state.currentPage += 1;
    },
    decreasePage: (state) => {
      state.currentPage -= 1;
      if (state.currentPage < 0) {
        state.currentPage = 0;
      }
    },
  },
});

export let tableReducer = tableSlice.reducer;
export let { increasePage, decreasePage, resetPage } = tableSlice.actions;