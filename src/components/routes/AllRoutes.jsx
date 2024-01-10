import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../../pages/home/HomePage';
import ContactUs from '../../pages/contact_us/ContactUsPage';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='contact-us' element={<ContactUs/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes