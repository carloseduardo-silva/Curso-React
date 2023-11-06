import {useRef} from 'react'

import Examples from './Examples'

//utilizado para passar elementos(fn,  refs, props) de um componente pai , podendo ser resgatados no componente filho através do fowardRef, e atribuirem funçoes a esses elementos passados através da chamada do componente Pai(ref, return{with the fn})

export const HookUseImperativeHandle = () => {

  const inputRef = useRef()

  return (
    <div>
      <h2>HookUseImperativeHandle</h2>
      <Examples ref={inputRef}/> 

      <button onClick={()=>{inputRef.current.validate()}}>Validate</button>
      <hr />
    </div>  
    
   

    )
}
