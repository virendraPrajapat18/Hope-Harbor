import React from "react";
import './Verification.css';
import { useRef ,useState } from "react";
import {NavLink} from "react-router-dom"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const VerifivationPage= ()=>{
  
  const nameForVerify = useRef();
  const aadharForVerify = useRef();
  const [message,setMessage] = useState(null);
  const [userData, setUserData] = useState(null);


  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }






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
    

    if(response.ok){
      setMessage({
        type: "Success",
        text : `Verification successful ! Registered user : ${data.donorDetails.personalDetails.name}`,
      })
      setUserData(data);
      
     
    }else{
      setMessage({type:"error",text:data.message});
      setUserData(null);
     
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
<main className="verify-container w-screen">

<div className=" w-full flex justify-end">
     <div className=" h-12 m-6">
     <button className="bg-red-600 hover:bg-red-700   p-2 rounded" onClick={handleLogout}>Logout</button>
     </div>
     </div>

     <div className=" flex flex-col h-full w-screen items-center pt-10 pb-20 " >

     

     <div className="mb-2">
      <h1>Donor Verification</h1>
      
    </div>

        <div className="border-2 border-red-700 p-20 rounded-xl " >
          <form
         onSubmit={handleVerification}
          className="flex flex-col items-center justify-center" >

            <input
            ref={nameForVerify}
             className=" outline-none border-2 border-red-700 rounded-full py-3 px-5 text-xl bg-transparent
              placeholder:text-gray-400
            " type="text" placeholder="Enter Donor`s Name"/>

            <input
            ref={aadharForVerify}
            required className=" outline-none border-2 border-red-700 rounded-full py-3 px-5 text-xl bg-transparent
              placeholder:text-gray-400 mt-3
            " type="text" id="aadhar" placeholder="Enter Donor`s Aadhar no." />

            <button  className="text-white outline-none w-full bg-red-600 hover:bg-red-700 rounded-full py-3 px-5 text-xl 
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
               className="msg px-3 py-2 bg-red-600 hover:bg-red-700  rounded-3xl">
                 Show Deatils
              </NavLink>
            )}
          </div>

          </div>

      </div>
      </main>
    </>
  )
}

export default VerifivationPage;