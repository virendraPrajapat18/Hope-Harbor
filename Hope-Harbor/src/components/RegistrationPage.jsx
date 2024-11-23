import React from "react";
import './Registration.css'

const RegistrationPage=()=>{


  return (
    <>
    <div className="register h-[100%] w-screen flex justify-center items-center flex-col">
      <div>
    <h2 className="text-4xl mt-3" >Registration Form</h2>
    </div>
    <form  >
      <div className=" my-6 ml-5">
        
        <div className=" my-10">

          <h3 className="text-3xl">Personal Details :</h3>


          <div >
            <label className="font-semibold text-xl mt-4" htmlFor="name">First Name : </label>
            <input
            className="border-2  bg-transparent text-base mx-3 px-2 rounded-2xl py-1"
            type="text" id="name"  placeholder="Enter your Name "  />
          </div>

      

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="age">Age : </label>
            <input type="text" id="age" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="above 18" />
          </div>

          <div >
            <label className="font-semibold text-xl mt-3" htmlFor="gender">Gender : </label>

            <input className="bg-transparent ml-3 mr-1 " type="radio" id="male" name="gender"/>
            <label  className="text-lg" htmlFor="male">Male </label>
            <input className="bg-transparent ml-7 mr-1" type="radio" id="female" name="gender"/>
            <label className="text-lg" htmlFor="female">Female </label>
            <input className="bg-transparent ml-7 mr-1" type="radio" id="other" name="gender"/>
            <label className="text-lg" htmlFor="other">Other </label>
           
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="bloodGroup">Blood Group :</label>
            <select className="bg-transparent  text-base rounded-2xl py-1 mx-3 px-2 " name="bloodGroup" id="bloodGroup">
              <option  value="" disabled selected>Select Blood Group</option>
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

          <div className="flex my-3">
            <label className="font-semibold text-xl mt-3" htmlFor="organ">Organ that I wish to Donate :</label>

            <div>

            <div>
            <input className="bg-transparent ml-3 mr-1 "  type="checkbox" id="heart" value="heart" />
            <label className="text-lg" htmlFor="heart">Heart</label>

            <input className="bg-transparent ml-3 mr-1 " type="checkbox" id="lungs" value="lungs" />
            <label className="text-lg" htmlFor="lungs">Lungs</label>

            <input className="bg-transparent ml-3 mr-1 " type="checkbox" id="liver" value="liver" />
            <label className="text-lg" htmlFor="liver">Liver</label>

            <input className="bg-transparent ml-3 mr-1 " type="checkbox" id="kidney" value="kidney" />
            <label className="text-lg" htmlFor="kidney">Kidney</label>
            </div>
           
            <input className="bg-transparent ml-3 mr-1 " type="checkbox" id="pancreas" value="pancreas" />
            <label className="text-lg" htmlFor="pancreas">Pancreas</label>
            
            <input className="bg-transparent ml-3 mr-1 " type="checkbox" id="intestines" value="intestines" />
            <label className="text-lg" htmlFor="intestines">Intestines</label>

            <input className="bg-transparent ml-3 mr-1 " type="checkbox" id="corneas" value="corneas" />
            <label className="text-lg" htmlFor="corneas">Corneas</label>

            </div>

          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="aadhar">Aadhar number : </label>
            <input  type="text" id="aadhar" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Aadhar card number "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="address">Address : </label>
            <input  type="text" id="address" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Address "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="city">City : </label>
            <input type="text" id="city" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter City Name "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="dist">District : </label>
            <input type="text" id="dist" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter District"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="pincode">Pincode : </label>
            <input type="text" id="pincode" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Pincode number"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="state">State : </label>
            <input type="text" id="state" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter State"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="mail">Email Address : </label>
            <input type="email" id="mail" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Email Id"  />
          </div>
          
          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="phone">Phone : </label>
            <input type="number" id="phone" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Phone number"  />
          </div>

          <div>

          </div>
        </div>

        <div>
          <h2 className="text-3xl">Emergency Contact Person Details :</h2>
           
          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Ename"> Name : </label>
            <input type="text" id="Ename" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Your Name "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="relationship">Relationship :</label>
            <select className="bg-transparent text-base rounded-2xl py-1 mx-3 px-2 " name="relationship" id="relationship">
              <option  value="" disabled selected>Select</option>
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
            <input type="text" id="Eaddress" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Address "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Ecity">City : </label>
            <input type="text" id="Ecity" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter City Name "  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Estate">State : </label>
            <input type="text" id="Estate" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter State"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Email">Email Address : </label>
            <input type="email" id="Email" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Email Id"  />
          </div>

          <div>
            <label className="font-semibold text-xl mt-3" htmlFor="Ephone">Phone : </label>
            <input type="number" id="Ephone" className="border-2 bg-transparent text-base mx-3 px-2 rounded-2xl py-1" placeholder="Enter Phone number"  />
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