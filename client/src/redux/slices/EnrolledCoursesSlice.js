import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 enrolleCoursesList:[],
 enrolledCourseDetails:[],
};

const EnrolledCoursesSlice = createSlice({
  name: "Enrolled Courses",
  initialState,
  reducers: {
    getEnrolledCourses:(state,action)=>{
        state.enrolleCoursesList = action.payload
    },
    getEnrolledDetails:(state,action)=>{
      state.enrolledCourseDetails = action.payload
  },
  },
});

export default EnrolledCoursesSlice.reducer;
export const {getEnrolledCourses,getEnrolledDetails } =
  EnrolledCoursesSlice.actions;