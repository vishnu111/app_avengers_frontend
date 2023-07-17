import { configureStore } from "@reduxjs/toolkit";
import { getBooks, bookSliceReducer } from "./slice/bookSlice";
import { getCart, cartSliceReducer } from "./slice/cartSlice";

//There are two states in redux store: books and cart
const store = configureStore({
  reducer: {
    books: bookSliceReducer,
    cart: cartSliceReducer,
  },
});
export { store, getBooks, getCart };
