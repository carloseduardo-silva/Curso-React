import { useState } from "react"

const ManageData = () => {

    var data = 10

    const [number, setNumber] = useState(22)

   
  return (
    <div>
      <h1> Valor: {number}</h1>
      <button onClick={() => setNumber(33)}>Mudar Valor</button>
    
    </div>
  )
}

export default ManageData
