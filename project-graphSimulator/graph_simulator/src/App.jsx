import { useState } from 'react'
import './App.css'
import { Title } from '../components/Title'
import Config from '../components/Config/Config'

import {BrowserRouter, Routes, Route} from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Title/>
        

        <Routes>
          <Route path='/' element={<Config/>}/>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
