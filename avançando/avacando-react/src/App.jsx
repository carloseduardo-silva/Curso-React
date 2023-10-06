import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import eu from "./assets/perfil-blue.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em React</h1>

      <div>
        <h2>Lindão no preto logo abaixo:</h2>
        <img src="/images/perfil-black.jpg" alt="eu" />
      </div>
        

      <div>
      <h2> Lindão no azul logo abaixo</h2>
      <img src={eu} alt="eu" />
      </div>

    </>
  )
}

export default App
