import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 coursesList:[],
 displayCourseDetails:false,
};

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses:(state,action)=>{
        state.coursesList = action.payload
    },
   toggleDisplay:(state)=>{
        state.displayCourseDetails = !state.displayCourseDetails
   }
  },
});

export default CoursesSlice.reducer;
export const { toggleDisplay,getCourses} =
  CoursesSlice.actions;