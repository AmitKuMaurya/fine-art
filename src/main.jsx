import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
// import { BrowserRouter } from 'react-router-dom';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import { AboutUs } from './components/about_us/AboutUs.jsx';
import { Login } from './components/login/Login.jsx';
import SignUp from './components/sign_up/SignUp.jsx';
import { ContactUs } from './components/contact_us/ContactUs.jsx';
import { Cart } from './components/cart/Cart.jsx';
import { Product } from './components/product/Product.jsx';
import { PrivacyPolicy } from './components/privacy_policy/PrivacyPolicy.jsx';
import { Category } from './components/category/Category.jsx';
import { Pricing } from './components/pricing/Pricing.jsx';
import { HomePage } from './components/home/HomePage.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path : "/log-in",
        element : <Login/>
      },
      {
        path : "/sign-up",
        element : <SignUp/>
      },
      {
        path : "/contact-us",
        element : <ContactUs/>
      },
      {
        path : "/about-us",
        element : <AboutUs/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/category",
        element : <Category/>
      },
      {
        path : "/product",
        element : <Product/>
      },
      {
        path : "/pricing",
        element : <Pricing/>
      },
      {
        path : "/privacy-policy",
        element : <PrivacyPolicy/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
