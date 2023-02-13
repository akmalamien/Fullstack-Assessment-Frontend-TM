import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../actions/task";

const store = configureStore({
  reducer: {
    task : taskReducer,
    
  }
});

export default store;
