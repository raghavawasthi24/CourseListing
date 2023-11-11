import React, { useEffect } from "react";
import DeatailedCourse from "../../components/DeatailedCourse";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/slices/CoursesSlice";

export default function AllCourses() {

  const courseList = useSelector((state)=>state.courses.coursesList)
  const dispatch = useDispatch()

  // console.log(courseList);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/getCourses')
    .then((res)=>{
      // console.log(res.data);
      dispatch(getCourses(res.data.allCourses))
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className="">
      <p className="font-bold text-xl mx-14">All Courses</p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 ">
        {
          courseList.map((courses, key) => {
            return <DeatailedCourse key={key} id={courses._id} name={courses.name} instructor={courses.instructor} status={courses.enrollmentStatus} location={courses.location} shedule={courses.shedule} duration={courses.duration} thumbnail={courses.thumbnail}/>;
          })
        }
      </div>
    </div>
  );
}
