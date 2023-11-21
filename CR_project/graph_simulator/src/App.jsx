import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Title } from '../components/Title'
import Config from '../components/Config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title/>
      <Config/>
    </>
  )
}

export default App
