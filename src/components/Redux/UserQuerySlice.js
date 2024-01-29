import { createSlice } from "@reduxjs/toolkit";


let initialState = { dataApi: [], resultSearch: [] };



let userQuerySlice = createSlice({
  name: 'userQuery',
  initialState,
  reducers: {
    saveData: (initialState, { payload }) => {
      initialState.dataApi = payload;
    },
    search: (initialState, { payload }) => {
      initialState.resultSearch = [];
      initialState.resultSearch = initialState.dataApi.filter((obj) => obj.title_ar.toLowerCase().includes(payload.toLowerCase()));
    }

  }
});


export let userQueryReducer = userQuerySlice.reducer;
export let { saveData, search } = userQuerySlice.actions;