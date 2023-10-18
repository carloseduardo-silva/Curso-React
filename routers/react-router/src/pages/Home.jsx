import {Link} from 'react-router-dom'

import{useFetch} from '../hooks/useFetch'

import './Home.css'

const Home = () => {

  const url = 'http://localhost:3000/products'

  const {data:items, loading, error} = useFetch(url)
  
  
  
  return (
  <div>
  
        <h1>Produtos</h1>
    
        {error && <h3> {error}</h3>}

        <ul className='products'> 
          {items && items.map((product) => (
            <li key={product.id}>
              <div className='products-li'>
                <h2>{product.name}</h2>
                <p>R$: {product.price}</p>

              <Link className='info' to={`/product/${product.id}`}> Detalhes </Link>  


              </div>

            </li>
          ))}
        </ul>

  </div>

  )
}

export default Home
