import { createSlice } from "@reduxjs/toolkit";

//BookSlice for book redux state
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    getCart(state, action) {
      const newCartValue = action.payload;
      const index = state.findIndex((item) => item.id === newCartValue.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...newCartValue };
      } else {
        state.push(newCartValue);
      }
    },
  },
});
export const { getCart } = cartSlice.actions;
export const cartSliceReducer = cartSlice.reducer;
