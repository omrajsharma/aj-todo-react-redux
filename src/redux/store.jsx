import { createStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const store = createStore(todoReducer);

export default store;