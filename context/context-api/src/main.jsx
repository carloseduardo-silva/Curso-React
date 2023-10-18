import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterContextProvider } from './context/CounterContext'
import { TitleColorContextProvider } from './context/TitleColorContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    {/*3 -Englobando componente geral(App.jsx) com o provider do counterContext.  */}
    <CounterContextProvider> 
      <TitleColorContextProvider> 
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>

  </React.StrictMode>,
)
