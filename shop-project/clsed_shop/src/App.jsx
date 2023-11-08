import { useState } from 'react'

import {Routes, Route, BrowserRouter} from "react-router-dom"

import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'



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
     
    </>
  )
}

export default App
