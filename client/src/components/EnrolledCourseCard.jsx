import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function EnrolledCourseCard() {
  const percentage = 90;
  return (
    <div>
      <div className="w-[350px] m-4 border rounded-xl overflow-hidden">
        <img
          src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png"
          alt=""
        />
        <div className="flex justify-between items-center p-2 px-4">
          <div>
            <p className="font-bold text-gray-700">Full Stack Development</p>
            <p className="">Neeraj Chopra</p>
          </div>

          <div className="w-20 h-20">
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Text size
                textSize: "16px",
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `${
                  percentage < 30 ? "red" : percentage < 70 ? "orange" : "green"
                }`,
                textColor: `${
                  percentage < 30 ? "red" : percentage < 70 ? "orange" : "green"
                }`,
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
         <p className="text-red-500 font-bold px-4">Course will end in 2 days </p>
      </div>
    </div>
  );
}
