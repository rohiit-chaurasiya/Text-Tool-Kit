import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { UsernameProvider } from "./components/UsernameContext";

function App() {
  
  return (
    <>
   
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/signin"  element={<Auth />}/>
      <Route path="/signup"  element={<SignUp/>}/>
      
      
    </Routes>

    <Footer/>
    
    </>
    
  );
}

export default App;
