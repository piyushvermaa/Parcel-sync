import React from 'react'
import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';
import ButtonGradient from '../../assets/svg/ButtonGradient';
const LandingPage = () => {
  return (
   <>
   <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
   <Header/>
   <Hero/>
   <ButtonGradient/>
    <Footer/>
    </div>
   </>
  )
}

export default LandingPage