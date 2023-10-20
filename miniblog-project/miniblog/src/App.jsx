import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'


//componentes
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

//pages
import Home from './pages/home/Home'
import About from './pages/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

        <BrowserRouter> 
        <NavBar/> 
        <div className='container'> 
        <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>

        </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
   
    </>
  )
}

export default App
