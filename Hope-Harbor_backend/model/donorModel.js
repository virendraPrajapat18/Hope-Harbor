const mongoose = require('mongoose');

const EmergencyPersonSchema = new mongoose.Schema({
  Ename: { type: String, required: true },
  Erelationship: { type: String, required: true },
  Eaddress: { type: String ,required: true},   
  Ecity: { type: String },  ////
  Estate: { type: String }, ////
  Eemail: { type: String, required: true },
  Ephone: { type: String, required: true },
});

const PersonalDetailsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 18 },
  gender: { type: String, required: true },
  bloodGroup: { type: String },  ////
  // organDonate: { type: [String], required: true },
  aadhar: { type: String, required: true, unique: true, length: 12 },
  address: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  pincode: { type: String,required: true},  
  state: { type: String,required: true },   
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
});

const donorSchema = new mongoose.Schema({
  personalDetails: PersonalDetailsSchema,
  EmergencyPersonDetails: EmergencyPersonSchema,

},)

const Registration = mongoose.model("Registration", donorSchema);

module.exports = Registration;