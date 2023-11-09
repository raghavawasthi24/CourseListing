import React from "react";
import EnrolledCourseCard from "../../components/EnrolledCourseCard";
import { AiOutlineCalendar, AiOutlineFieldTime } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

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

      <div>
        <div>
          <p>About Course</p>
          <p>In Progress</p>

          <p>
            <span>Course Name:</span> Full Stack Development
          </p>
          <p>
            <span>Instructor's Name:</span> Neeraj Chopra
          </p>

          <div>
              <div className="text-gray-500 flex items-center">
                <AiOutlineCalendar className="w-4 h-4 mr-1" /> 6 Months
              </div>
              <div className="text-gray-500 flex items-center">
                <CiLocationOn className="w-4 h-4 mr-1" />
                Karnaataka, India
              </div>
              <div className="text-gray-500 flex items-center">
                <AiOutlineFieldTime className="w-4 h-4 mr-1" />
                6PM-PM, Thursaday, Friday
              </div>
            </div>

            <div>
              <p>Description</p>
              <p></p>
            </div>


        </div>
      </div>
    </div>
  );
}
