import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "./ModalsSlice.js";
import { userReducer } from "./UserSlice.js";




export let store = configureStore({
  reducer: {
    modals: modalsReducer,
    user: userReducer,
  }
});