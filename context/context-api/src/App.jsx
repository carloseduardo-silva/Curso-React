import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
//componentes
import NavBar from './components/NavBar'
import ChangeCounter from './components/ChangeCounter'
//pages
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'

//context


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter> 
      <NavBar/>
      <ChangeCounter/>
      <Routes> 

        <Route path='/firstPage' element={<First/>}/>
        <Route path='/secondPage' element={<Second/>}/>
        <Route path='/thirdPage' element={<Third/>}/>

      </Routes>
    </BrowserRouter>

    
     
    </>
  )
}

export default App
