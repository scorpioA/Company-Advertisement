import React from 'react'
// import Navbarr from './Component/Navbar/Navbar'
import Form from './Component/Login/Form'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import Footer from './Component/Footer/Footer'
// import Mainpart from './Component/Mainpart'
// import Main from "./Component/Main"
// import Companylogo from './Component/Companylogo'
// import Banner from './Component/Navbar/Banner'
import Company_detail from './Company_detail'
import { Routes, Route } from "react-router-dom";
import Home from './Home';





function App() {
  //  <Navbarr />
  //  <Banner />
  //   <Main className="Mian" />
  //   <Companylogo />
  //   <Footer />
  return (
    < >
    <div className='appbody'>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/login" element={<Form />}></Route>
    <Route exact path="/Company_detail" element={<Company_detail />}></Route>
    
    </Routes>
    </div>
      
    </>
  )
}

export default App