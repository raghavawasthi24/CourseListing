require("dotenv").config();
const course = require("../models/course");
const Courses = require("../models/course");
const { v4: uuidv4 } = require("uuid");
const user = require("../models/user");
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
  } catch(err) {
    console.log(err);
    res.status(500).json({msg:"user or courses does not exists"});
  }
};

const markCompleted = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    if (!userId || !courseId)
      return res.status(400).json({ msg: "userId or courseId not provided" });

    const updatedStudent = await user.findByIdAndUpdate(
      userId,
      { $set: { "courses.$[elem].completed": true } },
      { arrayFilters: [{ "elem.id": courseId }], new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ msg: "Student not found" });
    }

    res.status(200).json({ msg: "Course set as completed" });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};


const enrolledCourses = async (req, res) => {
  const userId  = req.params.id;
  try{
    if(userId)
    {
      const student = await user.findById(userId);
      if(student)
      {
        const courses = student.courses;
        return res.status(200).json({msg:"courses fetched successfully",courses})
      }
      else{
        return res.status(404).json({msg:"student not found"})
      }
    }
  }
  catch(err){
    console.log(err);
    return res.status(500).json(err);
}
}

const search = async (req, res) => {
  const query = req.body.query;

  try {
    const courses = await Courses.find({
      $or: [
        { name: { $regex: new RegExp(query, 'i') } },
        { instructor: { $regex: new RegExp(query, 'i') } },
      ],
    });

    return res.status(200).json({ msg: "Courses fetched successfully", courses });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};



module.exports = { getCourses, getDetails,markCompleted, enrolledCourses,search };
