import React from 'react'
import { Route,Routes} from "react-router-dom";
import { HomePage } from '../home/HomePage.jsx';
import { ContactUs } from '../contact_us/ContactUs.jsx';
import { Login } from '../login/Login.jsx';
import SignUp from '../sign_up/SignUp.jsx';

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='log-in' element={<Login/>} />
            <Route path='sign-up' element={<SignUp/>} />
            <Route path='about-us' element={<ContactUs/>} />
            <Route path='contact-us' element={<ContactUs/>} />
        </Routes>
    </>
  )
}
