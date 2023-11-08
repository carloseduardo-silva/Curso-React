import {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'

const Product = () => {

    const [idProduct, setIdProduct] = useState(0)

  
    const { id } = useParams()

    useEffect(()=>{
        setIdProduct(id)
        console.log(idProduct)
    }, [])
   

  return (
    <div>
        <h2>Product:  {idProduct}  </h2>
      
    </div>
  )
}

export default Product
