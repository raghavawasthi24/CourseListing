import React, { useEffect } from "react";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../redux/slices/EnrolledCoursesSlice";
import axios from "axios";


export default function EnrolledCourses() {
  const enrolledCourseList = useSelector((state)=>state.enrolledCourses.enrolleCoursesList)
  const dispatch = useDispatch()


  useEffect(()=>{
    axios.get("http://localhost:5000/api/enrolledCourses/654e11505265f393f94959ce")
    .then((res)=>{
      console.log(res.data);
      dispatch(getEnrolledCourses(res.data.courses))
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  return (
    <div>
      <Header/>
      <p className="font-bold text-xl m-5">Enrolled Courses</p>
      <div className="flex gap-4 flex-wrap">
        {enrolledCourseList?.map((courses, key) => {
          return <EnrolledCourseCard key={key}/>;
        })}
      </div>

     
    </div>
  );
}
