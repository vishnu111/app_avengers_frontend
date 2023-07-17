import { createSlice } from "@reduxjs/toolkit";

//BookSlice for book redux state
const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    getBooks(state, action) {
      return action.payload;
    },
  },
});
export const { getBooks } = bookSlice.actions;
export const bookSliceReducer = bookSlice.reducer;
