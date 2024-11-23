import React from "react";
import Header from "./components/Header";
import RegistrationPage from "./components/RegistrationPage";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer";


const App=()=>{

  return (
    <>
     <Header/>
     {/* <RegistrationPage/> */}
     <HomePage/>
     <Footer/>
    </>
  )
}

export default App;