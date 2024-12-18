import React, { useState,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () => {

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const passwordRef = useRef("");

 

  const handleLogin = async (e) => {
    e.preventDefault();

   const username = usernameRef.current.value;
   const password = passwordRef.current.value;

    try {
      const response = await fetch("https://hope-harbor.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token in localStorage
       localStorage.setItem("authToken", data.token);
        usernameRef.current.value= "";
        passwordRef.current.value = "";
        navigate("/verify"); // Redirect to verification page
        
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    
  };

  return (
    <div className="Login flex items-center justify-center h-screen ">
    <div className="w-full max-w-md  shadow-lg rounded-lg p-8">
       <h2 className="text-2xl font-bold text-red-700 text-center mb-6" >Login to Verify</h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        
        <input
          type="text"
          placeholder="Enter your username"
          ref={usernameRef}
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border text-red-700 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
          // value={password}
          
          // onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border text-red-700 text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          required
          autoComplete="off"
        />
        <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" type="submit">Login</button>
        {error && <p className="text-red-600 text-center text-sm">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
