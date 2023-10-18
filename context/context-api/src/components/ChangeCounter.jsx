import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {

    const {counter, setCounter} = useCounterContext()


  return (
    <div>
        <button onClick={() => { setCounter(counter+1)}}> Change Value of Counter</button>
      
    </div>
  )
}

export default ChangeCounter
