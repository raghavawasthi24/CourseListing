const express = require("express");
const { getCourses, getDetails, markCompleted, enrolledCourses, search } = require("../controllers/courses");
const { loginUser, registerUser, enrollUser } = require("../controllers/auth");
const router = express.Router();


//Routes for courses
router.get("/getCourses",getCourses)
router.get("/getDetails/:id",getDetails)
router.post("/markCompleted", markCompleted)
router.get("/enrolledCourses/:id", enrolledCourses)
router.post("/search", search)

//Routes for users
router.post("/login",loginUser)
router.post("/register",registerUser)
router.post("/enroll",enrollUser)

module.exports = router;