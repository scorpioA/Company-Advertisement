import React from 'react'
import Footer from './Component/Footer/Footer'
import Mainpart from './Component/Mainpart'
import Main from "./Component/Main"
import Companylogo from './Component/Companylogo'
import Banner from './Component/Navbar/Banner'
import Navbarr from './Component/Navbar/Navbar'
import "./Home.css"
function Home() {
  return (
   <>
   <div className='appbody'>
   
   <Navbarr />
   <Banner />
   <Mainpart />
    <Main className="Mian" />
    <Companylogo />
    <Footer />
  </div>
   </>
  )
}

export default Home