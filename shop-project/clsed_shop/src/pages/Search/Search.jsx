import { useState, useEffect, useLayoutEffect } from 'react'
import Nav from '../../components/Nav'

import { useFetchDatas } from '../../hooks/useFetchDatas'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

//css
import styles from "./Search.module.css"

const Search = () => {

  const[load, setLoad] = useState(null)
  

  //catch param from url
  const productQuery = useQuery()
  const search = productQuery.get('q')


  const {datas, loading, error } = useFetchDatas('products', search )


  useEffect(() => {
    setLoad(loading)
    
  })

  


  return (
    <>
        <Nav/>

      <div className={styles.search_container}>
      {load ? <h1> Buscando produtos...</h1> : <h1> Resultado da pesquisa:</h1>}

        <div className={styles.card_container}>
          
          {datas ? datas.map((data) =>(
                    <Link to={`/products/${data.idProduct}`}>
                    <div key={data.idProduct} className={styles.card}>
                        <div className={styles.img_card}>
                            <img src={data.URLimage} alt="camiseta" />
                        </div>
                        <p> {data.name}</p>
                        <p> R${data.price},00</p>
                    </div>
                 </Link>
           )) : <h2>Não foi encontrado nenhum produto!</h2>}
        </div>

      </div>
    </>
  )
}

export default Search
