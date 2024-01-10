import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Home/Home';
import ContactUs from '../contact_us/ContactUs';
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