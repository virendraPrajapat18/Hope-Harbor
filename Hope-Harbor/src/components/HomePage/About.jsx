import React from "react";
import './about.css'
import { NavLink } from "react-router-dom";

const About=()=>{

  return (
    <>
    <div className="flex justify-center w-screen shrink h-96 ">


      <div className=" w-[50%]   h-[100%] pr-20 mt-6">
         

          <div className=" mt-5 text-2xl">Be an
          <span className="ml-2 text-red-700" >Organ Donor</span>
          </div>
          <div className="mt-2">
            <h2>About Organ Donation</h2>
          </div>

          <div className="mt-2 font-sm font-light">
            <p>
One organ donor can become a beacon of hope, saving up to 8 lives with vital organs and transforming up to 75 more through tissue donations like corneas and skin. It’s not just a donation; it’s a legacy of life, vision, and healing—proof that even in passing, we can shine a light on someone’s tomorrow.</p>
          </div>
          <div className="mt-8">
          <NavLink to="register"  className= {(isActive)=> `about-link  px-4 py-2 rounded-3xl border-2 bg-red-700 hover:bg-red-800  text-lg font-semibold` }  >Register</NavLink>
          </div>
      </div>

      <div className="mt-10 w-80 h-80">
      <img  className=" about-img  rounded-full " src="https://www.sakraworldhospital.com/spl_splimgs/organ-donation-2020-1.jpg"  />
      </div>


    </div>
    </>
  )
}

export default About;