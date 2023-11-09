import React from "react";
import DeatailedCourse from "../../components/DeatailedCourse";

export default function AllCourses() {
  const term = ["1", "2", "3", "4"];
  return (
    <div className="">
      <p className="font-bold text-xl mx-14">All Courses</p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 ">
        {
          term.map((courses, key) => {
            return <DeatailedCourse />;
          })
        }
      </div>
    </div>
  );
}
