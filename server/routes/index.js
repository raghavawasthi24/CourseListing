const express = require("express");
const { getCourses, getDetails } = require("../controllers/courses");
const { loginUser, registerUser } = require("../controllers/auth");
const router = express.Router();


//Routes for courses
router.get("/getCourses",getCourses)
router.get("/getDetails/:id",getDetails)

//Routes for users
router.post("/login",loginUser)
router.post("/register",registerUser)

module.exports = router;