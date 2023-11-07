import  { useState, useEffect } from 'react'



const List = (getItems) => {

    const [myItems, setMyItems] = useState([])

    useEffect(()=>{
        
        console.log('Buscando itens do DB...')

        
    }, [getItems])

  return (
    <div>
        {myItems && myItems.map((item) =>(
            <p key={item}> {item}</p>
        ))}
      
    </div>
  )
}

export default List
