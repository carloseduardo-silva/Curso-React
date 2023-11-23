import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {

    const {counter, setCounter} = useCounterContext()

    const handleForm = (e) =>{
      e.preventDefault()
      console.log('aq')
      setCounter(counter+1)
    }


  return (
    <div>
      <h2>{counter}</h2>
        <form onSubmit={handleForm}>

          <label>
            <p> Config</p>
            <input type="text" />
          </label>
        <button > Change Value of Counter</button>
        </form>

      
    </div>
  )
}

export default ChangeCounter
