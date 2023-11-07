import {useEffect, useState, useLayoutEffect} from 'react'

const HookUseLayoutEffect = () => {

    const[name, setName] = useState('Algum nome')

    useEffect(()=>{
        console.log('2')
        setName('Mudou de novo!')
    },[])

    useLayoutEffect(()=>{

        console.log('1')
        setName('Outro nome')
    },[])

  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>nome: {name}</p>
      

      <hr/>
    </div>
  )
}

export default HookUseLayoutEffect
