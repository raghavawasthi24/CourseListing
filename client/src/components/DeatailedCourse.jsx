import React from 'react'
import {
    AiOutlineArrowRight,
    AiOutlineCalendar,
    AiOutlineFieldTime,
  } from "react-icons/ai";
  import { CiLocationOn } from "react-icons/ci";

export default function DeatailedCourse() {
  return (
    <div>
        <div className="w-[300px] m-4 border rounded-xl overflow-hidden">
        <img
          src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png"
          alt=""
        />
        <div className="flex flex-col p-2">
          <div className="flex justify-between my-1">
            <p className="bg-green-400 text-white px-1 text-sm">In Progress</p>
            <p>Click</p>
          </div>
          <p className="font-bold text-gray-700 ">Full Stack Development</p>
          <p className="text-gray-500 ">Neeraj Chopra</p>
          <hr className="my-4" />
          <div className="flex flex-col gap-3">
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
            <p className="text-end text-blue-700 text-semibold flex items-center justify-end">
              <AiOutlineArrowRight className="w-4 h-4 mr-2" />
              View Details
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
