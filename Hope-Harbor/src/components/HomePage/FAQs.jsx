import React from "react";
import './FAQs.css'
import Cards from "./Cards";

const FAQs=()=>{

  


  return (
    <>
    <div className="faq-title w-screen h-40 flex justify-center items-center flex-col">
      <div className="text-2xl"> Organ Donation <span className="text-red-700">FAQs</span></div>
      <h2 className="text-4xl">All that you need to know about Organ Donation</h2>
    </div>
   
   <Cards/>
    
    </>
  )
}

export default FAQs;