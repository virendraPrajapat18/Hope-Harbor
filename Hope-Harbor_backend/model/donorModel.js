const mongoose = require('mongoose');

const EmergencyPersonSchema = new mongoose.Schema({
  Ename: { type: String  },
  Erelationship: { type: String  },
  Eaddress: { type: String },   
  Eemail: { type: String },
  Ephone: { type: String },
});

const PersonalDetailsSchema = new mongoose.Schema({
  name: { type: String  },
  age: { type: Number },
  gender: { type: String },
  bloodGroup: { type: String },  
  aadhar: { type: String},
  address: { type: String },  
  state: { type: String },   
  email: { type: String  },
  phone: { type: String  },
});

const donorSchema = new mongoose.Schema({
  personalDetails: PersonalDetailsSchema,
  EmergencyPersonDetails: EmergencyPersonSchema,

},)

const Registration = mongoose.model("Registration", donorSchema);

module.exports = Registration;