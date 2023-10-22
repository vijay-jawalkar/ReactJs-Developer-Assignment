import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    filterState: filterReducer,
  },
});
