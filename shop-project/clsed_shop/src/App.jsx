import { useState } from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"

//styles
import './App.css'

//pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'

//components
import Footer from './components/Footer'



function App() {
 

  return (
    <>

    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
    <Footer/>
     
    </>
  )
}

export default App
