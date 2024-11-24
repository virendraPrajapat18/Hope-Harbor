import React from "react";
import './Verification.css';
import { useRef } from "react";

const VerifivationPage=()=>{

  const nameForVerify = useRef();
  const aadharForVerify = useRef();

  const handleVerification=(e)=>{
   e.preventDefault();

   const detailsForVerification={
    name: nameForVerify.current.value,
    aadhar: aadharForVerify.current.value
   }
  //  console.log(detailsForVerification)
   
  nameForVerify.current.value=""
  aadharForVerify.current.value=""


  }



  return (
    <>
     
     <div className="verify-container flex h-screen w-screen items-center justify-center" >
        <div className="border-2 border-red-700 p-20 rounded-xl " >
          <form
         onSubmit={handleVerification}
          className="flex flex-col items-center justify-center" >

            <input
            ref={nameForVerify}
            required className=" outline-none border-2 border-red-700 rounded-full py-3 px-5 text-xl bg-transparent
              placeholder:text-gray-400
            " type="name" placeholder="Enter your Name"/>

            <input
            ref={aadharForVerify}
            required className=" outline-none border-2 border-red-700 rounded-full py-3 px-5 text-xl bg-transparent
              placeholder:text-gray-400 mt-3
            " type="aadhar" placeholder="Enter Aadhar number" />

            <button  className="text-white outline-none w-full bg-red-700 rounded-full py-3 px-5 text-xl 
              placeholder:text-white mt-5
            " >Verify</button>

          </form>

        </div>

      </div>
    </>
  )
}

export default VerifivationPage;