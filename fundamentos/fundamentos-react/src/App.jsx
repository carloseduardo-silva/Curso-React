import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Vite</h1>
        
    <FirstComponent/>

    <TemplateExpressions/>

    <Events/>

    </>

  )
}

export default App
