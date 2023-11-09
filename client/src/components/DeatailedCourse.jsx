import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "90%",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px solid #fff",
  borderRadius: "10px",
  p: 4,
};

export default function DeatailedCourse() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="w-[330px] lg:w-[300px] border rounded-xl overflow-hidden">
        <img
          src="https://trainings.internshala.com/cached_uploads/homepage/media/courses_section/card_images/web-development.png"
          alt=""
        />
        <div className="flex flex-col p-2">
         
            <p className="bg-green-400 w-fit text-white px-1 text-sm">In Progress</p>
          
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
            <p
              className="text-end text-blue-700 text-semibold flex items-center justify-end cursor-pointer"
              onClick={handleOpen}
            >
              <AiOutlineArrowRight className="w-4 h-4 mr-2" />
              View Details
            </p>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl">About Course</p>
            <p className="w-fit bg-green-400 text-white px-1 text-sm">
              In Progress
            </p>

            <p>
              <span className="font-semibold">Course Name:</span> Full Stack
              Development
            </p>
            <p>
              <span className="font-semibold">Instructor's Name:</span> Neeraj
              Chopra
            </p>

            <div>
              <div className="flex items-center">
                <AiOutlineCalendar className="w-4 h-4 mr-1" /> 6 Months
              </div>
              <div className="flex items-center">
                <CiLocationOn className="w-4 h-4 mr-1" />
                Karnaataka, India
              </div>
              <div className="flex items-center">
                <AiOutlineFieldTime className="w-4 h-4 mr-1" />
                6PM-PM, Thursaday, Friday
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">Description</p>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>

            <div>
              <p className="text-lg font-bold">Pre-Requisite</p>
              <ol>
                <li>Lorem ipsum is a placeholder text</li>
                <li>graphic design, Lorem ipsum is a place</li>
                <li>graphic design, Lorem ipsum is a place</li>
                <li>e visual form of a document or a typeface without</li>
              </ol>
            </div>

            <div>
              <Accordion sx={{ boxShadow: "none" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                  sx={{ width: "100px", padding: "0" }}
                >
                  <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                    Syllabus
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ width: "full", padding: "0" }}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="flex justify-center">
            <Button variant="contained">Enroll</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
