import React from "react";
import EnrolledCourseCard from "../../components/EnrolledCourseCard";
import { AiOutlineCalendar, AiOutlineFieldTime } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>

          <div>
            <p>Pre-Requisite</p>
            <ol>
              <li>Lorem ipsum is a placeholder text</li>
              <li>graphic design, Lorem ipsum is a place</li>
              <li>graphic design, Lorem ipsum is a place</li>
              <li>e visual form of a document or a typeface without</li>
            </ol>
          </div>

          <div>
            
            <Accordion sx={{boxShadow:"none"}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{width:"150px"}}
              >
                <Typography>Syllabus</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{width:"full"}}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
           
          </div>
        </div>
      </div>
    </div>
  );
}
