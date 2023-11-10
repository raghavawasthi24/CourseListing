require("dotenv").config();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    const payload = { _id: user._id };
    const cookie_token = jwt.sign(payload, process.env.SECRET_KEY);
    res.cookie("jwt", cookie_token, {
      secure: true,
      expires: new Date(Date.now() + 10800),
      httpOnly: false,
    });
    if (password == user.password) {
      res.status(200).json({ msg: "Logeed in", jwt_token: cookie_token });
    } else {
      res.status(200).json({ msg: "password not matched" });
    }
  } else {
    res.status(200).json({ msg: "Not User" });
  }
};



const registerUser = async (req, res) => {
  const { name, email,gender, password } = req.body;

  // Check if the user already exists in the database
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: 'User is already registered' });
    }

    // If the user doesn't exist, create a new user
    const newUser = new User({
      name: name,
      email: email,
      password: password,
      gender:gender
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};





// const getUser= async (req,res)=>{
//     const {id} = req.body;
//     if(id){
//         const user = await User.findById(id);
//         if(user)
//         {
//            res.status(200).json({"msg":"user found","data":{
//             "name":user.name,
//             "number":user.number
//            }});
//         }
//         else{
//             res.status(200).json({"msg":"user not found"});
//         }
//     }
//     else{
//         res.status(200).json({"msg":"id not found"});
//     }
// }

module.exports = { loginUser, registerUser };