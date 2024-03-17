import ButtonGradient from "./assets/svg/ButtonGradient";
import React from "react";

import { createRoot } from 'react-dom/client';

import Footer from "./components/Footer";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./components/home/Home";
import PublicProfile from "./components/profile/PublicProfile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './components/LoginSignUp/LoginPage';
import './components/LoginSignUp/SignUpPage';
import LoginPage from "./components/LoginSignUp/LoginPage";
import SignUpPage from "./components/LoginSignUp/SignUpPage";
import Otppage from "./components/LoginSignUp/Otppage";


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home/profile" element={<PublicProfile/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="signup" element={<SignUpPage/>}/>
      <Route path="footer" element={<Footer/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="otp" element={<Otppage/>}/>

      

    </Routes>
    </BrowserRouter>
  );
};

export default App;
