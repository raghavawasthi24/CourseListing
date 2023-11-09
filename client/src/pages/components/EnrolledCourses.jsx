import React from "react";
import EnrolledCourseCard from "../../components/EnrolledCourseCard";


export default function EnrolledCourses() {
  const term = ["1", "2", "3", "4"];
  return (
    <div>
      <p className="font-bold text-xl mx-5">Enrolled Courses</p>
      <div className="flex gap-4 flex-wrap">
        {term.map((courses, key) => {
          return <EnrolledCourseCard />;
        })}
      </div>

     
    </div>
  );
}
