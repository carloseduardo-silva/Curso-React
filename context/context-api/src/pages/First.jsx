import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"
const First = () => {

  const {counter} = useCounterContext()
  const {color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) =>{
    dispatch({type: color})
  }

  

  return (
    <div>
        <h1 style={{color: color}}>First Page</h1>
        <p> Valor do Context: {counter}</p>

        <button onClick={() => {setTitleColor('RED')}}> Red</button>
        <button onClick={() => {setTitleColor('GREEN')}}> Green</button>
        <button onClick={() => {setTitleColor('YELLOW')}}> Yellow</button>
      
    </div>
  )
}

export default First
