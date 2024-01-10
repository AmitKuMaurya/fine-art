import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
// import AllRoutes from './components/routes/AllRoutes'
import Footer from './components/footer/Footer'
import { HomePage } from './components/home/HomePage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  )
}

export default App
