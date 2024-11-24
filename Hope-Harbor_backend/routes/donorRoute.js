const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Registration = require('../model/donorModel');
const router = express.Router();
app.use(express.json())


router.post("/register", async (req, res) => {


  const { personalDetails, EmergencyPersonDetails } = req.body;
 
    
try{
    //Check for existing data
    // const existing = await Registration.findOne({
    //   "personalDetails.aadhar": personalDetails.aadhar,
    // });
    // if (existing) {
    //   return res.status(400).json({ message: "Aadhar number is already registered." });
    // }

    // const age = personalDetails.age;
    // if(age<18){
    //  return res.status(400).json({ message: "You must be 18 or older to register." });
    // }

    const newRegistration = await Registration.create ({
      personalDetails,
      EmergencyPersonDetails,
    });

    
    res.status(201).json({
      message: "Registration successful.",
      data: newRegistration
     });
     console.log(newRegistration);
    }catch (error) {
    console.error(error);
    res.status(500).json({ 
     message: "Server error.",
     error: error.message
     });
  }

})

module.exports = router;