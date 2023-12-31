import React, { useEffect, useState } from "react";
import DeatailedCourse from "../../components/DeatailedCourse";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/slices/CoursesSlice";
import Pagination from "@mui/material/Pagination";

export default function AllCourses() {
  const courseList = useSelector((state) => state.courses.coursesList);
  const dispatch = useDispatch();
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_APP_URL}/api/getCourses/${page}`)
      .then((res) => {
        setLoading(false);
        // console.log(res.data);
        dispatch(getCourses(res.data.allCourses));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);


  return (
    <div className="flex flex-col gap-2">
     
      <p className="font-bold text-xl sm:mx-14 mx-4">All Courses</p>
      {loading?
      <p className="text-black text-center">Please wait since API's are deployed on Render ! Please refresh again</p>:null}
      <div className="w-[90%] m-auto grid md:grid-cols-2 gap-2 lg:grid-cols-3 ">
        
        {courseList.map((courses, key) => {
          return (
            <DeatailedCourse
              key={key}
              id={courses._id}
              name={courses.name}
              instructor={courses.instructor}
              status={courses.enrollmentStatus}
              location={courses.location}
              shedule={courses.shedule}
              duration={courses.duration}
              thumbnail={courses.thumbnail}
            />
          );
        })}
      </div>
      <div spacing={2} className=" flex justify-center my-5">
        <Pagination count={2} onChange={e=>setPage(e.target.innerText)} className="w-fit"/>
      </div>
    </div>
  );
}
