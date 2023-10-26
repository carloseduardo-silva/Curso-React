import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import  {onAuthStateChanged} from "firebase/auth"



//context
import{ AuthContextProvider } from './context/Auth'

import './App.css'

//hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

//componentes
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

//pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import CreatePost from './pages/createPost/CreatePost'
import Dashboard from './pages/dashboard/Dashboard'
import Search from './pages/search/Search'
import Post from './pages/post/Post'


function App() {

 
  const [user, setUser] = useState(undefined)
  const { auth, logout } = useAuthentication()

  const loadingUser = user === undefined

  
  useEffect(() =>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  }, [auth]);


  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <>
     
    <AuthContextProvider value={{user}}> 
        <BrowserRouter> 
          <NavBar/> 
          <div className='container'> 
          <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/search" element={<Search/>}  /> 
          <Route path='/posts/:id' element={<Post/>} /> 
          <Route path="/login" element={!user ? <Login/>  : <Navigate to={"/"}/>}/>
          <Route path="/register" element={!user ? <Register/>  : <Navigate to={"/"}/>}/>
          <Route path="/post/create" element={ user ? <CreatePost/>  : <Navigate to={"/login"}/>} />
          <Route path="/dashboard" element={user ? <Dashboard/>  : <Navigate to={"/login"}/>} />
          

          </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </AuthContextProvider>
   
    </>
  )
}

export default App
