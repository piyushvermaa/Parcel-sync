import ButtonGradient from "./assets/svg/ButtonGradient";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/home/Home";
import PublicProfile from "./components/profile/PublicProfile";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />

        <Footer />
      </div>

      <ButtonGradient />
{/*       <Home /> */}
      {/* <PublicProfile/> */}
    </>
  );
};

export default App;
