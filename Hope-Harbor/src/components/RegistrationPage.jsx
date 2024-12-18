import React, { useState } from "react";
import './Registration.css'
import { useRef } from "react";

const RegistrationPage=()=>{



const [error,setError] = useState("");


  //Personal Details
const nameRef = useRef();
const ageRef = useRef();
const genderRef = useRef();
const bloodGroupRef = useRef();
const aadharNoRef = useRef();
const addressRef = useRef();
const stateRef = useRef();
const emailRef = useRef();
const phoneRef = useRef();

//Emergency contact person Details
const EnameRef = useRef();
const ErelationshipRef = useRef();
const EaddressRef = useRef();
const EemailRef = useRef();
const EphoneRef = useRef();

const handleSubmit= async (e)=>{
   e.preventDefault();

 
  
   const personalDetails = {
     name :nameRef.current.value,
     age : ageRef.current.value,
     gender:genderRef.current.querySelector("input[name='gender']:checked")?.value,
     bloodGroup:bloodGroupRef.current.value,
     aadhar:aadharNoRef.current.value.replace(/\s+/g,""),
     address:addressRef.current.value,
     state:stateRef.current.value,
     email:emailRef.current.value,
     phone:phoneRef.current.value,
   }

   const EmergencyPersonDetails={
     Ename:EnameRef.current.value,
     Erelationship:ErelationshipRef.current.value,
     Eaddress:EaddressRef.current.value,
     Eemail:EemailRef.current.value,
     Ephone:EphoneRef.current.value,
   }


   const formData={
    personalDetails,
    EmergencyPersonDetails
   }

 

  const response = await fetch("http://localhost:5002/register",{
    method: "POST",
    body : JSON.stringify(formData),
    headers:{
      "Content-Type": "application/json",
    }
  })

  const result = await response.json();

  if(!response.ok){
    setError(result.message);
  }
  if(response.ok){
    setError("");
    alert("Form submitted successfully !");
    nameRef.current.value=""
    ageRef.current.value=""
    bloodGroupRef.current.value=""
    aadharNoRef.current.value=""
    addressRef.current.value=""
    stateRef.current.value=""
    emailRef.current.value=""
    phoneRef.current.value=""
  
     
  
    EnameRef.current.value=""
    ErelationshipRef.current.value=""
    EaddressRef.current.value=""
    EemailRef.current.value=""
    EphoneRef.current.value=""
  
    const genderInputs = genderRef.current.querySelectorAll("input[name='gender']");
    genderInputs.forEach((radio) => (radio.checked = false));
  
  }

 
}




  return (
    <>
    <div className="register text-red-700 h-[100%] w-screen flex justify-center items-center flex-col">
      {error && <div className="alert alert-danger mt-10 rounded-full mx-5" role="alert">{error}</div>}
      <div>
    <h2 className="text-4xl mt-3" >Registration Form</h2>
    </div>
    <form onSubmit={handleSubmit}  >
      <div className=" my-6 ml-5">
        
        <div className=" my-10">

          <h3 className="text-3xl">Personal Details :</h3>


          <div >
            <label className="font-semibold text-xl mt-4" htmlFor="name">Name : </label>
            <input 
            required
            ref={nameRef}
            className="border-2  bg-transparent text-base mx-3 px-2 rounded-2xl py-1"
            type="text" id="name"  placeholder="Enter your Name "  />
           
          </div>

      

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="age">Age : </label>
            <input 
            required
             ref={ageRef}
            type="text" id="age" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="above 18" />
          </div>

          <div ref={genderRef} >
            <label className="font-semibold text-xl mt-3" htmlFor="gender">Gender : </label>

            <input  className="bg-transparent ml-3 mr-1 " type="radio" id="male" name="gender" value="male"/>
            <label  className="text-lg" htmlFor="male">Male </label>
            <input className="bg-transparent ml-7 mr-1" type="radio" id="female" value="female" name="gender"/>
            <label className="text-lg" htmlFor="female">Female </label>
            <input className="bg-transparent ml-7 mr-1" type="radio" id="other" name="gender" value="other" />
            <label className="text-lg" htmlFor="other">Other </label>
           
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="bloodGroup">Blood Group :</label>
            <select 
            ref={bloodGroupRef}
            className="bg-transparent  text-base rounded-2xl py-1 mx-3 px-2 " name="bloodGroup" id="bloodGroup">
              <option value=""  disabled  >Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="aadhar">Aadhar number : </label>
            <input 
            required
            ref={aadharNoRef}
            type="text" id="aadhar" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Aadhar card number "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="address">Address : </label>
            <input 
            required
            ref={addressRef}
            type="text" id="address" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Address "  />
          </div>

      

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="state">State : </label>
            <input 
            ref={stateRef}
            type="text" id="state" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter State"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="mail">Email Address : </label>
            <input  
            ref={emailRef}
            type="email" id="mail" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Email Id"  />
          </div>
          
          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="phone">Phone : </label>
            <input
            required 
            ref={phoneRef}
            type="number" id="phone" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Phone number"  />
          </div>

          <div>

          </div>
        </div>

        <div>
          <h2 className="text-3xl">Emergency Contact Person Details :</h2>
           
          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Ename"> Name : </label>
            <input 
            required
            ref={EnameRef}
            type="text" id="Ename" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Your Name "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="relationship">Relationship :</label>
            <select ref={ErelationshipRef}  className="bg-transparent text-base rounded-2xl py-1 mx-3 px-2 " name="relationship" id="relationship">
              <option  value=""  disabled >Select</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="husband">Husband</option>
              <option value="wife">Wife</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="grandfather">Grandfather</option>
              <option value="grandmother">Grandmother</option>
              <option value="uncle">Uncle</option>
              <option value="aunty">Aunty</option>
              <option value="cousin">Cousin</option>
              <option value="nephew">Nephew</option>
              <option value="niece">Niece</option>
              <option value="friend">Friend</option>
            
            </select>
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Eaddress">Address : </label>
            <input
            ref={EaddressRef}
            type="text" id="Eaddress" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Address "  />
          </div>


          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Email">Email Address : </label>
            <input 
            ref={EemailRef}
            type="email" id="Email" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Email Id"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Ephone">Phone : </label>
            <input 
            required
            ref={EphoneRef}
            type="number" id="Ephone" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Phone number"  />
          </div>
        

        </div>
        <div className="flex justify-center items-center">
        <button className="mt-14 px-4 py-2 rounded-3xl border-2 bg-red-700 hover:bg-red-800  text-lg font-semibold">Submit</button>
        </div>
      </div>
      </form>
      
      </div>
    </>
  )
}

export default RegistrationPage;