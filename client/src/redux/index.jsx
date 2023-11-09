import { configureStore } from "@reduxjs/toolkit";
import CoursesSlice from "./slices/CoursesSlice";


const store = configureStore({
  reducer: {
    courses:CoursesSlice
  },
});

export default store;