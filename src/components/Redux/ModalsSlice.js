import { createSlice } from "@reduxjs/toolkit";


let initialState = { showChangeId: false, showEditRow: false, showDelete: false, showDeleteRow: false, rowId: null, showAddBalance: null, showUserQuery: false, showLogOut: false };



let modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    handleShowChangeId: (initialState) => {
      initialState.showChangeId = true;
    },
    handleCloseChangeId: (initialState) => {
      initialState.showChangeId = false;
    },
    handleShowEditRow: (initialState, { payload }) => {
      initialState.showEditRow = true;
      initialState.rowId = payload;
    },
    handleCloseEditRow: (initialState) => {
      initialState.showEditRow = false;
    },
    handleShowDelete: (initialState) => {
      initialState.showDelete = true;
    },
    handleCloseDelete: (initialState) => {
      initialState.showDelete = false;
    },
    handleShowDeleteRow: (initialState, { payload }) => {
      initialState.showDeleteRow = true;
      initialState.rowId = payload;
    },
    handleCloseDeleteRow: (initialState) => {
      initialState.showDeleteRow = false;
    },
    handleShowAddBalance: (initialState, { payload }) => {
      initialState.showAddBalance = true;
      initialState.rowId = payload;
    },
    handleCloseAddBalance: (initialState) => {
      initialState.showAddBalance = false;
    },
    handleShowUserQuery: (initialState, { payload }) => {
      initialState.showUserQuery = true;
      initialState.rowId = payload;
    },
    handleCloseUserQuery: (initialState) => {
      initialState.showUserQuery = false;
    },
    handleShowLogOut: (initialState, { payload }) => {
      initialState.showLogOut = true;
      initialState.rowId = payload;
    },
    handleCloseLogOut: (initialState) => {
      initialState.showLogOut = false;
    },
  }
});


export let modalsReducer = modalsSlice.reducer;
export let { handleShowChangeId, handleCloseChangeId, handleShowDelete, handleCloseDelete, handleShowDeleteRow, handleCloseDeleteRow, handleShowEditRow, handleCloseEditRow, handleShowAddBalance, handleCloseAddBalance, handleShowUserQuery, handleCloseUserQuery, handleShowLogOut, handleCloseLogOut } = modalsSlice.actions;