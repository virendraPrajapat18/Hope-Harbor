const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const donorRoute = require('./routes/donorRoute')

const app = express();

app.use(express.json())

const cors = require('cors');
app.use(cors());




mongoose.connect(process.env.URL).
then(()=>{
   console.log("Connected successfuly");
   app.listen(process.env.PORT || 8000,(err)=>{
      if(err) console.log(err);
      console.log("running successfully st",process.env.PORT);
   });
})
.catch((error)=>{
   console.log("error",error);
})




app.use(donorRoute);






























// app.post("/register", async (req, res) => {
//    const { personalDetails, EmergencyPersonDetails } = req.body;

//    try{
//       const donorAdded = await Registration.create({
//          personalDetails,
//          EmergencyPersonDetails,
//       })
//       res.status(201).json({
//          message: "Registration successful!",
//          data: donorAdded
//        });
//    }
//    catch(error){
//       console.error("Error in registration:", error.message);
//       res.status(500).json({
//         message: "Registration failed",
//         error: error.message
//       });
//    }
// })

// app.listen(process.env.PORT);





