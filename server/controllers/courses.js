require("dotenv").config();
const Courses = require("../models/course");
const { v4: uuidv4 } = require("uuid");
// const axios = require("axios");

const getCourses = async (req, res) => {
  try {
    const allCourses = await Courses.find().select(
      "thumbnail name instructor enrollmentStatus duration location shedule"
    );
    return res.status(200).json({
      msg: "All Courses fetched successfully",
      allCourses,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getDetails = async (req, res) => {
  const id = req.params.id;

  try {
    if (!id) return res.status(400).json({ msg: "Course id not provided" });
    else {
      const courseDetails = await Courses.findById(id);
      return res.status(200).json({
        msg: "All Courses fetched successfully",
        courseDetails,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { getCourses, getDetails };
