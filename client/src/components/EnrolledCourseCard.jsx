import axios from "axios";
import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function EnrolledCourseCard({
  id,
  thumbnail,
  name,
  instructor,
  progress,
  due_date,
  isCompleted
}) {
  console.log(id)

  const [markedValue, setmarkedValue] = useState(isCompleted)
  

  const markComplete =(e)=>{
    if(!markedValue)
    {
      axios.post(`${import.meta.env.VITE_APP_URL}/api/markCompleted`,{
        userId:localStorage.getItem("id"),
        courseId:id
      }).then((res)=>{
        console.log("completed")
        setmarkedValue(true)
      })
    }
  }

  return (
    <div>
      <div className="w-[350px] m-4 border rounded-xl overflow-hidden">
        <img
          src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png"
          alt=""
        />
        <div className="flex justify-between items-center p-2 px-4">
          <div>
            <p className="font-bold text-gray-700">{name}</p>
            <p className="">{instructor}</p>
            
          </div>

          <div className="w-20 h-20">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Text size
                textSize: "16px",
                // How long animation takes to go from one progress to another, in seconds
                pathTransitionDuration: 0.5,
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
                // Colors
                pathColor: `${
                  progress < 30 ? "red" : progress < 70 ? "orange" : "green"
                }`,
                textColor: `${
                  progress < 30 ? "red" : progress < 70 ? "orange" : "green"
                }`,
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
        <p className="text-red-500 font-bold px-4">
          Course will end in 2 days{" "}
        </p>

        <div className="flex w-fit items-center gap-1 px-4 py-2">
              <input
                type="checkbox"
                className="w-3 h-3 rounded-full"
                id="mark"
                checked={markedValue}
                onChange={markComplete}
              />
              <label className="text-gray-400 text-sm">
                Mark Completed
              </label>
            </div>
      </div>
    </div>
  );
}
