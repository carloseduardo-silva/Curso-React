import { useCounterContext } from "../hooks/useCounterContext"

const Second = () => {

  const {counter} = useCounterContext()

  return (
    <div>
          <h1>Second Page</h1>
          <p>Valor do contador: {counter}</p>
      
    </div>
  )
}

export default Second
