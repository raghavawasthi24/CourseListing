import React, { useEffect } from "react";
import EnrolledCourseCard from "../components/EnrolledCourseCard";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourses } from "../redux/slices/EnrolledCoursesSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function EnrolledCourses() {
  const enrolledCourseList = useSelector((state)=>state.enrolledCourses.enrolleCoursesList)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(enrolledCourseList);

  useEffect(()=>{
    if(!localStorage.getItem("token"))
    {
      navigate("/login")
    }
    axios.get(`http://localhost:5000/api/enrolledCourses/${localStorage.getItem("id")}`)
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
          return <EnrolledCourseCard key={key} id={courses.id} thumbnail={courses.thumbnail} name={courses.name} instructor={courses.instructor} progress={courses.progress} duration={courses.due_date} isCompleted={courses.completed}/>;
        })}
      </div>

     
    </div>
  );
}
