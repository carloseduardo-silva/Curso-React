import { useSearchParams } from "react-router-dom"

import { useFetch } from "../hooks/useFetch"

const Search = () => {

    const [searcParams] = useSearchParams()

    const url = 'http://localhost:3000/products?' + searcParams

    const{data:item, loading, error} = useFetch(url)

  return (
    <div>
      <h1> Resultados Disponiveis</h1>

        <ul> 

        {item && item.map((item) =>(
            <li> 
                <h2>{item.name} </h2>
                <p>{item.price}</p>
            
            </li>
        ))}

        </ul>

    </div>
  )
}

export default Search
