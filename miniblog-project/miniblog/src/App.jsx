import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'


//componentes
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

//pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


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
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register" element={ <Register/> }/>

        </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
   
    </>
  )
}

export default App
