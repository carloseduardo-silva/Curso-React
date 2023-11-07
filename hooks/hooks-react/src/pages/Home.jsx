import React from 'react'


//CONTEXT
import { useContext } from 'react'
import { MessageContext } from '../components/HookUseContext'

//hooks
import HookUseState from "../components/HookUseState"
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallBack from '../components/HookUseCallBack'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import { HookUseImperativeHandle } from './components/HookUseImperativeHandle'
import HookCustom from './components/HookCustom'


const Home = () => {

  const { msg } = useContext(MessageContext)

  console.log(msg)
  return (
    <div>
      <h1>Home</h1>

      <HookUseState/>
      <HookUseReducer/>
      <HookUseEffect/>
      <HookUseRef/>
      <HookUseCallBack/>
      <HookUseMemo/>
      <HookUseLayoutEffect/>
      <HookUseImperativeHandle/> 
      <HookCustom/> 


      <h2>useContext</h2>
      <p>Valor do contexto: {msg}</p>
    </div>
  )
}

export default Home






      