import React, { useCallback, useState } from 'react'

import List from "./List"

const HookUseCallBack = () => {

    const   [counter, setCounter] = useState(0);

    const getItemsFromDb = useCallback(() =>{
        return ["a", "b", "c"]
    },[])

  return (
    <div>
        <h2>UseCallback</h2>
        <List getItems={getItemsFromDb} />
        <button onClick={()=> setCounter(counter + 1)}> Alterar</button>
        <p>{counter}</p> 
      <hr />
    </div>
  )
}

export default HookUseCallBack
