import { configureStore } from "@reduxjs/toolkit";
import emotionReducer from "./emotion";

export const store = configureStore({
  reducer: {
    emotion: emotionReducer,
  },
});

export default store;
