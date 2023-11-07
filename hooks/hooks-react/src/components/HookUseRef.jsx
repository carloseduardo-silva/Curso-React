import React from 'react'
import { useState, useEffect, useRef } from 'react'

const HookUseRef = () => {

    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)
   




    //1.UseRef é renderizado apenas 1 vez, userefname.current = quantidade de vezes que foi renderizado
    useEffect(()=>{
        numberRef.current = numberRef.current +1
    })

    //2. useRef e DOM
    const inputRef = useRef()
    const [text, setText] = useState('')
    
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setText('')
        inputRef.current.focus()
    }

    
 

  return (
    <div>
      <h1>UseRef</h1>

    <p> O componente renderizou : {numberRef.current} vezes.</p>

    <p> Counter 1: {counter}</p>
    <button onClick={()=>{setCounter(counter+1)}}>Contador A</button>


    <p> Counter 2: {counterB}</p>
    <button onClick={()=>{setCounterB(counterB+1)}}>Contador B</button>


    <p>Useref inputs</p>
    <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" value={text} onChange={(e) =>{setText(e.target.value)}} />
        <input type="submit" value="Enviar" />

    </form>


      <hr/>
    </div>
  )
}

export default HookUseRef
