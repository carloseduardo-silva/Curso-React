import { useCounterContext } from "../hooks/useCounterContext"


const Third = () => {

  const {counter} = useCounterContext()

  return (
    <div>
        <h1>Third Page</h1>
        <p> Valor do Context: {counter}</p>
    </div>
  )
}

export default Third
