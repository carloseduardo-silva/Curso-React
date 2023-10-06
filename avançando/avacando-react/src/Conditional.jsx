import { useState } from "react"
const Conditional = () => {

    const [y] = useState(false)

    const[name, setName] = useState('Pedrin')

  return (
    <div>
        {y ? <h2> Y é verdadeiro</h2>: <h2> Y é FALSO</h2>}

        { name === 'Pedrin' ? <h2> O nome realmente é PEDRIN!</h2> : <h2> O nome não foi encontrado</h2>}

        
        <button onClick={() => setName('Joaozin')}>Mudar Nome</button>
        <button onClick={() => setName('Pedrin')}>Voltar</button>

    </div>

  )
}

export default Conditional
