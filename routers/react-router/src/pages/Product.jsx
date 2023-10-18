import { useParams, Link } from "react-router-dom"

import {useFetch} from "../hooks/useFetch"



const Product = () => {

    //getting the param (id) from the url
    const {id} = useParams()

    const url = "http://localhost:3000/products/" + id;
   
    const {data:item, loading, error} = useFetch(url)

  
  return (
    <div>
      <p> Id do produto: {id}</p>
      {error && <p> {error} </p>}
      {loading && <p> Carregando ... </p>}

       {item && 
       <div>
            <h2> {item.name} </h2>
            <p> {item.price}</p>
            <Link to={`/product/${item.id}/info`}> Mais informações </Link>
       </div>}


    </div>
  )
}

export default Product
