import React from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage } from '../home/HomePage.jsx';
import { ContactUs } from '../contact_us/ContactUs.jsx';
import { PrivacyPolicy } from "../privacy_policy/PrivacyPolicy"
import { AboutUs } from "../about_us/AboutUs"
import { Login } from '../login/Login.jsx';
import { Category } from "../category/Category.jsx"
import { Product } from "../product/Product.jsx"
import { Pricing } from "../pricing/Pricing.jsx"
import SignUp from '../sign_up/SignUp.jsx';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='log-in' element={<Login />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='about-us' element={<AboutUs />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='category' element={<Category />} />
        <Route path='Product' element={<Product />} />
        <Route path='Pricing' element={<Pricing />} />
      </Routes>
    </>
  )
}
