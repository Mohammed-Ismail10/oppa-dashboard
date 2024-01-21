import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "./ModalsSlice.js";
import { userQueryReducer } from "./UserQuerySlice.js";




export let store = configureStore({
  reducer: {
    modals: modalsReducer,
    userQuery: userQueryReducer,
  }
});