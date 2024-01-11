import React from 'react'
import { Route,Routes} from "react-router-dom";
import { HomePage } from '../home/HomePage.jsx';
import { ContactUs } from '../contact_us/ContactUs.jsx';
export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='contact-us' element={<ContactUs/>} />
        </Routes>
    </>
  )
}
