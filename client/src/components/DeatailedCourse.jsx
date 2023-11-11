import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCalendar,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getCourses, getDetails } from "../redux/slices/CoursesSlice";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxHeight:"90%",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "1px solid #fff",
  borderRadius: "10px",
  p: 4,
};

export default function DeatailedCourse({
  id,
  name,
  instructor,
  status,
  location,
  shedule,
  duration,
  thumbnail,
}) {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.courses.courseDetails);
  const [open, setOpen] = React.useState(false);
  // console.log(details);


  const handleOpen = () => {
    axios.get(`${process.env.API_URL}/api/getDetails/${id}`).then((res) => {
      dispatch(getDetails(res.data.courseDetails));
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const enrollStudent= ()=>{
    axios.post(`${process.env.API_URL}/api/enroll`,{
      userId:"654e11505265f393f94959ce",
      courseId:id
    }).then((res) => {
      console.log(res.data);
      toast.success("You are enrolled!")
    }).catch(()=>{
      toast.error("Already Enrolled")
    });
  }

  return (
    <div>
      <div className="w-[330px] lg:w-[300px] border rounded-xl overflow-hidden">
        <img
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-col p-2">
          <p className="bg-green-400 w-fit text-white px-1 text-sm">{status}</p>

          <p className="font-bold text-gray-700 ">{name}</p>
          <p className="text-gray-500 ">{instructor}</p>
          <hr className="my-4" />
          <div className="flex flex-col gap-3">
            <div>
              <div className="text-gray-500 flex items-center">
                <AiOutlineCalendar className="w-4 h-4 mr-1" /> {duration}
              </div>
              <div className="text-gray-500 flex items-center">
                <CiLocationOn className="w-4 h-4 mr-1" />
                {location}
              </div>
              <div className="text-gray-500 flex items-center">
                <AiOutlineFieldTime className="w-4 h-4 mr-1" />
                {shedule}
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
              {details?.status}
            </p>

            <p>
              <span className="font-semibold">Course Name:</span>{" "}
              {details?.name}
            </p>
            <p>
              <span className="font-semibold">Instructor's Name:</span>{" "}
              {details?.instructor}
            </p>

            <div>
              <div className="flex items-center">
                <AiOutlineCalendar className="w-4 h-4 mr-1" />{" "}
                {details?.duration}
              </div>
              <div className="flex items-center">
                <CiLocationOn className="w-4 h-4 mr-1" />
                {details?.location}
              </div>
              <div className="flex items-center">
                <AiOutlineFieldTime className="w-4 h-4 mr-1" />
                {details?.shedule}
              </div>
            </div>

            <div>
              <p className="text-lg font-bold">Description</p>
              <p>{details?.description}</p>
            </div>

            <div>
              <p className="text-lg font-bold">Pre-Requisite</p>
              <ol>
                {details?.prerequisites?.map((requisites, key) => {
                  return <li key={key}>{requisites}</li>;
                })}
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
            <Button variant="contained" onClick={enrollStudent} sx={{marginTop:"2rem"}}>Enroll</Button>
          </div>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}
