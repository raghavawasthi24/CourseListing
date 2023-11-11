import { configureStore } from "@reduxjs/toolkit";
import CoursesSlice from "./slices/CoursesSlice";
import EnrolledCoursesSlice from "./slices/EnrolledCoursesSlice";


const store = configureStore({
  reducer: {
    courses:CoursesSlice,
    enrolledCourses:EnrolledCoursesSlice
  },
});

export default store;