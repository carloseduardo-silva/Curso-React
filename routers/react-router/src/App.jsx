import { useState } from 'react'
//1 - config reactRouter
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './App.css'

//components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
import Search from './components/Search'

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>React Router</h1>

    

    <BrowserRouter>
      <Navbar/>
      <SearchForm/>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/product/:id/info' element={<Info/>} />
        {/* page not found */}
        <Route path='*' element={<NotFound/>}/>
        {/* redirecting route */}
        <Route path='/company' element={<Navigate to={'/about'} />} />
        <Route path='/search'  element={<Search/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
