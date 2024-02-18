import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "./ModalsSlice.js";
import { userQueryReducer } from "./UserQuerySlice.js";
import { resetReducer } from "./ResetSlice.js";
import { checkboxReducer } from './CheckboxSlice.js';




export let store = configureStore({
  reducer: {
    modals: modalsReducer,
    userQuery: userQueryReducer,
    reset: resetReducer,
    checkbox: checkboxReducer
  }
});