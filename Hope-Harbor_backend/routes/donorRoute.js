const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Registration = require('../model/donorModel');
const router = express.Router();
app.use(express.json())


const jwt = require("jsonwebtoken");



const users = [
  {
    username: "healthCareAdmin",
    password: "healthCare@2024",  
  },
  {
    username: "DrAdminPortal",
    password: "adminAccess@2024",
  },
];


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = password === user.password;;    //await compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ username: user.username },  process.env.JWT_SECRET || "defaultSecretKey", {
      expiresIn: "1h",
    });

    res.status(200).json({ token, message: "Login successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});







router.post("/register", async (req, res) => {


  const { personalDetails, EmergencyPersonDetails } = req.body;
 
    
try{
    //Check for existing data
    const existing = await Registration.findOne({
      "personalDetails.aadhar": personalDetails.aadhar,
    });
    if (existing) {
      return res.status(400).json({ message: "Aadhar number is already registered." });
    }

    const age = personalDetails.age;
    if(age<18){
     return res.status(400).json({ message: "You must be 18 or older to register." });
    }

    const newRegistration = await Registration.create ({
      personalDetails,
      EmergencyPersonDetails,
    });

    
    res.status(201).json({
      message: "Registration successful.",
      data: newRegistration
     });
     
     
    }catch (error) {
    console.error(error);
    res.status(500).json({ 
     message: "Server error.",
     error: error.message
     });
  }

})

router.post('/verify', async(req,res)=>{
  const {name,aadhar} = req.body;
  // const aadhar = detailsForVerification.aadhar;

  try{
    
    const sanitizedAadhar = aadhar.replace(/\s+/g, "");
    const donor = await Registration.findOne({"personalDetails.aadhar":sanitizedAadhar});

    if(!donor){
      return res.status(404).json({
        message:"Person not Registered ! Please check the details or register first." 
      })
    }

    return res.status(200).json({
      donorDetails : donor,
      message : "Person is registered !"
    })
    console.log(data);

  } catch(error){
     return res.status(500).json({
      message : "Server error. Please try again later."
     })
  }
})

module.exports = router;