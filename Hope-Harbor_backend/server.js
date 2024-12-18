const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const donorRoute = require('./routes/donorRoute')
 
const path = require('path');

const app = express();

app.use(express.json())

const cors = require('cors');
app.use(cors());

const _dirname = path.resolve();


mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully!");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("Server running successfully on port", process.env.PORT || 8000);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });





app.use(donorRoute);

app.use(express.static(path.join(_dirname,"/Hope-Harbor/dist")));
app.get('*',(_,res)=>{
   res.sendFile(path.resolve(_dirname,"Hope-Harbor","dist","index.html"));
});