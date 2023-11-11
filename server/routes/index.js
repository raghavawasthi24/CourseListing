const express = require("express");
const { getCourses, getDetails, markCompleted, enrolledCourses, search, likeCourse, unlikeCourse } = require("../controllers/courses");
const { loginUser, registerUser, enrollUser } = require("../controllers/auth");
const router = express.Router();


//Routes for courses
// router.get("/getCourses",getCourses)
router.get("/getCourses/:pageNo",getCourses)
router.get("/getDetails/:id",getDetails)
router.post("/markCompleted", markCompleted)
router.get("/enrolledCourses/:id", enrolledCourses)
router.post("/search", search)
router.post("/likeCourse",likeCourse)
router.post("/unlikeCourse",unlikeCourse)

//Routes for users
router.post("/login",loginUser)
router.post("/register",registerUser)
router.post("/enroll",enrollUser)

module.exports = router;