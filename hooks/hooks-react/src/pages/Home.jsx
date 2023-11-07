import React from 'react'
import HookUseState from './components/HookUseState'
import HookUseReducer from './components/HookUseReducer'
import HookUseEffect from './components/HookUseEffect'
import { HookUseImperativeHandle } from './components/HookUseImperativeHandle'
import HookCustom from './components/HookCustom'
const Home = () => {
  return (
    <div>
      <h2>home</h2>
      <HookUseState/>
      <HookUseReducer/>
      <HookUseEffect/>
      <HookUseImperativeHandle/> 
      <HookCustom/> 
    </div>
  )
}

export default Home
