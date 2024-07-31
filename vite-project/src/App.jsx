import React from "react";
import  './App.css'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Login />}  />

          <Route path="/SignUp" element={<SignUp />}  />

          <Route path='/Home' element={ <Home />}></Route>
     
        </Routes>
      
    </div>
  );
}

export default App;
