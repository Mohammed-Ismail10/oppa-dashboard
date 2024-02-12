import { createSlice } from "@reduxjs/toolkit";


let initialState = { uploadImage: false, uploadSvga: false, uploadSvgaError: false };



let resetSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {
    uploadImageTrue: (initialState) => {
      initialState.uploadImage = true;
    },
    uploadImageFalse: (initialState) => {
      initialState.uploadImage = false;
    },
    uploadSvgaTrue: (initialState) => {
      initialState.uploadSvga = true;
    },
    uploadSvgaFalse: (initialState) => {
      initialState.uploadSvga = false;
    },
    uploadSvgaErrorTrue: (initialState) => {
      initialState.uploadSvgaError = true;
    },
    uploadSvgaErrorFalse: (initialState) => {
      initialState.uploadSvgaError = false;
    },
  }
});


export let resetReducer = resetSlice.reducer;
export let { uploadImageTrue, uploadImageFalse, uploadSvgaTrue, uploadSvgaFalse, uploadSvgaErrorTrue, uploadSvgaErrorFalse } = resetSlice.actions;