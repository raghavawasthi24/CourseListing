import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 coursesList:[],
 courseDetails:[],
 displayCourseDetails:false,
};

const CoursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses:(state,action)=>{
        state.coursesList = action.payload
    },
    getDetails:(state,action)=>{
      state.courseDetails = action.payload
      console.log(state.courseDetails)
  },
   toggleDisplay:(state)=>{
        state.displayCourseDetails = !state.displayCourseDetails
   }
  },
});

export default CoursesSlice.reducer;
export const { toggleDisplay,getCourses,getDetails} =
  CoursesSlice.actions;