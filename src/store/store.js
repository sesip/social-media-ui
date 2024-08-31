import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice.js";

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});
