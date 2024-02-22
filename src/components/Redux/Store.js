import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "./ModalsSlice.js";
import { userQueryReducer } from "./UserQuerySlice.js";
import { resetReducer } from "./ResetSlice.js";
import { tableReducer } from './TableSlice';




export let store = configureStore({
  reducer: {
    modals: modalsReducer,
    userQuery: userQueryReducer,
    reset: resetReducer,
    table: tableReducer
  }
});