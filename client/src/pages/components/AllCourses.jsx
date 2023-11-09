import React from "react";


import DeatailedCourse from "../../components/DeatailedCourse";
import EnrolledCourseCard from "../../components/EnrolledCourseCard";
import { CProgress, CProgressBar } from "@coreui/react";

export default function AllCourses() {
  return (
    <div className="">
      <p className="font-bold text-xl mx-5">All Courses</p>
      <DeatailedCourse />     
    </div>
  );
}
