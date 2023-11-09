import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

// import { Progress } from "flowbite-react";
import { Progress } from "semantic-ui-react";

export default function EnrolledCourseCard() {
  const now = 90;
  return (
    <div>
      <div className="w-[400px] m-4 border rounded-xl overflow-hidden">
        <img
          src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png"
          alt=""
        />
        <div className="flex flex-col p-2">
          <p className="text-end m-0 text-red-500">Due 2 days</p>
          {now > 70 ? (
            <Progress percent={now} size="small" progress success></Progress>
          ) : now > 40 ? (
            <Progress percent={now} size="small" progress warning></Progress>
          ) : (
            <Progress percent={now} size="small" progress error></Progress>
          )}

          <p className="m-0">Full Stack Development</p>
          <p className="m-0">Neeraj Chopra</p>
        </div>
      </div>
    </div>
  );
}
