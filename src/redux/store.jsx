import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; // Import the slice reducer

const store = configureStore({
  reducer: {
    todos: todoReducer, // Use the slice reducer
  },
});

export default store;
