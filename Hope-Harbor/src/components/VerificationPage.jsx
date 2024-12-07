import React from "react";
import './Verification.css';
import { useRef ,useState } from "react";
import PersonsDetails from "./personsDetails";
import {NavLink} from "react-router-dom"

const VerifivationPage= ()=>{

  const nameForVerify = useRef();
  const aadharForVerify = useRef();
  const [message,setMessage] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleVerification=async (e)=>{
   e.preventDefault();

   const detailsForVerification={
    name: nameForVerify.current.value,
    aadhar: aadharForVerify.current.value,
   }
   
  

  try{
    const response = await fetch("http://localhost:5002/verify",{
      method: "POST",
      headers :{
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(detailsForVerification),
    })

    const data = await response.json();
    console.log(data);

    if(response.ok){
      setMessage({
        type: "Success",
        text : `Verification successful ! Registered user : ${data.donorDetails.personalDetails.name}`,
      })
      setUserData(data);
      console.log(response.donorDetails);
     
    }else{
      setMessage({type:"error",text:data.message});
      setUserData(null);
      console.log(response.message)
    }

  } catch(error){
    setMessage({
      type:"error",
      text: "An error occured during verification. Please try again."
    })
    console.log(error);
  }

   
  nameForVerify.current.value=""
  aadharForVerify.current.value=""


  }
   



  return (
    <>
     
     <div className="verify-container flex flex-col h-screen w-screen items-center justify-center" >
        <div className="border-2 border-red-700 p-20 rounded-xl " >
          <form
         onSubmit={handleVerification}
          className="flex flex-col items-center justify-center" >

            <input
            ref={nameForVerify}
             className=" outline-none border-2 border-red-700 rounded-full py-3 px-5 text-xl bg-transparent
              placeholder:text-gray-400
            " type="text" placeholder="Enter your Name"/>

            <input
            ref={aadharForVerify}
            required className=" outline-none border-2 border-red-700 rounded-full py-3 px-5 text-xl bg-transparent
              placeholder:text-gray-400 mt-3
            " type="text" id="aadhar" placeholder="Enter Aadhar number" />

            <button  className="text-white outline-none w-full bg-red-700 rounded-full py-3 px-5 text-xl 
              placeholder:text-white mt-5
            " >Verify</button>

          </form>

         


        </div>


        <div>

        {message && (
            <div
              className={`mt-5 m-4 p-2 text-lg rounded ${
                message.type === "Success"
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
              }`}
            >
              {message.text}
            </div>
          
          )}
          
          <div className="flex justify-center">
          {userData && (
              <NavLink to="/personsDetails"
              state={{ userData }} 
               className="msg px-3 py-2 bg-red-700 rounded-3xl">
                 Show Deatils
              </NavLink>
            )}
          </div>

          </div>

      </div>
    </>
  )
}

export default VerifivationPage;