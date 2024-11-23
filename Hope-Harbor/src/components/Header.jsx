import React from "react";
import './header.css'
import {Link,NavLink} from "react-router-dom"

const Header=()=>{




  return (
    <>
      <header className=" bg-red-700 shadow sticky z-50 top-0 w-screen px-5 py-2 ">
        <nav className=" border-gray-500 text-white  flex flex-wrap justify-between h-14 items-center  max-w-screen" >
           
            <h1 className="text-3xl font-bold ">Hope-Harbor</h1>
           
              <ul className=" navbar flex items-center justify-between relative text-xl font-medium ">
                <li>
                  <NavLink to="/" className={(isActive)=>` link mx-6  p-2 hover:bg-red-900  rounded-full px-4  ` } >Home</NavLink>
                </li>
                <li>
                  <NavLink to="register" className={(isActive)=> `link mx-6 p-2 hover:bg-red-900 rounded-full px-4 `}   >Register</NavLink>
                </li>
                <li>
                  <NavLink to="verify" className= {(isActive)=> `link mx-6 p-2 hover:bg-red-900 rounded-full px-4 ` }   >Verify</NavLink>
                </li>
              </ul>
            
           
        </nav>
      </header>
 
    </>
  )
}

export default Header;