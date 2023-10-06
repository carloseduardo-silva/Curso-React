
const Challenge = () => {

    var a = 6
    var b = 12

    const somar = () =>{
        console.log(a+b)

    }

  return (
    <div>

        <h1> Os valores são a = {a} e b = {b}</h1>

        <button onClick={somar} > SOMAR </button>
      
    </div>
  )
}

export default Challenge
