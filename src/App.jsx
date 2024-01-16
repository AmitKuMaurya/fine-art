import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { AllRoutes } from './components/routes/AllRoutes'


function App() {

  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
  )
}

export default App
