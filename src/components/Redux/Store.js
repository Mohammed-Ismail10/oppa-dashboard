import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "./ModalsSlice.js";




export let store = configureStore({
  reducer: {
    modals: modalsReducer,
  }
});