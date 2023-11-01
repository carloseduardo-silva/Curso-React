import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {

    const [number, setNumber] = useState(1)

    const sum = () =>{
        setNumber(number+1)
    }

     //1- useEffect sem dependencias, executado sempre que a pagina for re-renderizada
     useEffect(()=>{
        console.log('Estou sendo executado')
    })

       //2- useEffect c array de dep. vazio, executado apenas UMA vez
       useEffect(()=>{
        console.log('Estou sendo executado apenas uma vez')
    }, [])

    
       //3- useEffect c array de dep., executado sempre que o valor no array for alterado
       useEffect(()=>{
        console.log('Estou sendo executado sempre que o numero mudar')
    }, [number])

    //4 - cleanup do useEffect
    useEffect(() =>{
        
        const timer = setTimeout(() =>{
            console.log('Hello Word')
            setNumber(number+2)
        }, 2000)


    }, [])


  return (
    <div style={{margin:"3em 0em"}}>
        
        <h1>UseEffect</h1>
        <p> Numero: {number}</p>
        <button onClick={sum}>somar 1</button>
      

        <hr />
    </div>
  )
}

export default HookUseEffect
