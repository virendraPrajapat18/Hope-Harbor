 import React from "react";
 import './Footer.css';
 import { FaFacebook } from "react-icons/fa";
 import { FaSquareXTwitter } from "react-icons/fa6";
 import { FaInstagram } from "react-icons/fa";
 import { NavLink } from "react-router-dom";

 const Footer=()=>{

  return (
    <>
    
    <footer className=" text-white pt-10 pb-4 footer-container w-screen">
  <div className="max-w-7xl mx-auto  px-4 text-center flex justify-between z-50">
    
    <div className="mb-8 w-96">
      <h3 className="text-xl  font-semibold mb-2">About Hope Harbor</h3>
      <p className="text-sm font-light leading-relaxed">
        Hope Harbor is dedicated to raising awareness about organ donation and providing a secure platform 
        for donors and doctors to make a life-saving difference. Together, we can create a brighter future 
        for those in need.
      </p>
    </div>

  
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
      <ul className="flex flex-col items-center gap-1 text-base">
        <li><NavLink to="/" className="Flink ">Home</NavLink></li>
        <li><NavLink to="register" className="Flink">Register</NavLink></li>
        <li><NavLink to="verify" className="Flink">Verify</NavLink></li>
        
      </ul>
    </div>

    
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
      <div className="text-sm leading-relaxed">
        <span className="font-medium">Email:</span> support@hopeharbor.org<br/>
        <span className="font-medium">Phone:</span> +1-800-123-4567<br/>
        <span className="font-medium">Address:</span> 123 Life Avenue, Hope City, HC 56789
      </div>
    </div>

    
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
      <div className="flex justify-center space-x-4 ">
        <a href="#" className="Flink"><FaFacebook /></a>
        <a href="#" className="Flink"><FaSquareXTwitter /></a>
        <a href="#" className="Flink"><FaInstagram /></a>
      </div>
    </div>

    
   
</div>


 <div className="border-t border-white/50 pt-4 text-base font-light flex justify-center items-center flex-col">
   <div>© 2024 Hope Harbor. All rights reserved.</div>
    <div>"Be the beacon of hope for someone in need."</div>
    </div>
    
</footer>

    </>
  )
 }

 export default Footer;