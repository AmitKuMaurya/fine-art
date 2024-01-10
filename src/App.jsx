import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './components/routes/AllRoutes'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
