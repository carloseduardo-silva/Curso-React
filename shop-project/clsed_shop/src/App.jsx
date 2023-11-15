import { useEffect, useState } from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'


//context

import { AuthContextProvider } from './context/Auth'

//styles
import './App.css'

//pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Register from './pages/Register/Register'
import Search from './pages/Search/Search'
import Cart from './pages/Cart/Cart'

//components
import Footer from './components/Footer'
import { auth } from './firebase/config'







function App() {
  const [user, setUser]  = useState()
 


  

  const loadingUser = user === undefined


  useEffect(()=>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
  }, [auth])


  if(loadingUser) {
    return <p> Carregando ...</p>
  }
 

  return (
    <>
    <AuthContextProvider value={{user}}>
     
        <BrowserRouter>

          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/register' element={!user ? <Register/> : <Navigate to={'/'} /> }></Route>
              <Route path='/login' element={!user ? <Login/> : <Navigate to={'/'} /> }></Route>
              <Route path='/products/:id' element={user ? <Product/> : <Navigate to={'/login'} /> }></Route>
              <Route path='/search' element={user ? <Search/> : <Navigate to={'/login'} /> }></Route>
              <Route path='/cart' element={user ? <Cart/> : <Navigate to={'/login'} /> }></Route>
             
              
          </Routes>
          
        
        
        </BrowserRouter>
        <Footer/>
      
    </AuthContextProvider>
    
    </>
  )
}

export default App
