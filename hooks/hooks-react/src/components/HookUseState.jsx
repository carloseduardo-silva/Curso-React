import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
  //1- UseState
  // principal diferença para o uso de variáveis, seria a capacidade de re-renderização assincrona do valor = DINAMICO.
  var userName = 'Joao Souza'

  const [name, setName] = useState('Carlão')
  
  const changeName = () =>{
    userName = 'Joao Pedro'
    setName('Carlin')
  }

  //2- UseState + inputs
  const [age, setAge] = useState(19)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(age)
  }
  
    return (
    <div style={{margin:"3em 0em"}}>
      <hr />
    <h1>HookUseState</h1>

    <p>Variavel: {userName}</p>

    <p>State: {name} </p>

    <button onClick={changeName}>trocar nome</button>



    <form onSubmit={handleSubmit} >

        <label>
            <p>Digite a sua idade:</p>
            <input onChange={(e) =>{setAge(e.target.value)}} type="text" value={age} />
        </label>

        <button type='submit'>enviar</button>
    </form>
        <h3> Voce possui {age} anos</h3>




        <hr />
    </div>
  )
}

export default HookUseState
