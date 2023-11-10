import { useState } from 'react'
import Nav from '../../components/Nav'

import { useFetchDatas } from '../../hooks/useFetchDatas'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

//css
import styles from "./Search.module.css"

const Search = () => {

  const productQuery = useQuery()
  const search = productQuery.get('q')

  const { datas, loading, error } = useFetchDatas('products', search )
  

  return (
    <>
        <Nav/>

      <div className={styles.search_container}>
      {loading ? <h1> Buscando produtos...</h1> : <h1> Resultado da pesquisa:</h1>}

        <div className={styles.card_container}>
          
          {datas.map((data) =>(
                    <Link to={`/products/${data.idProduct}`}>
                    <div key={data.idProduct} className={styles.card}>
                        <div className={styles.img_card}>
                            <img src={data.URLimage} alt="camiseta" />
                        </div>
                        <p> {data.name}</p>
                        <p> R${data.price},00</p>
                    </div>
                 </Link>
           ))}
        </div>

      </div>
    </>
  )
}

export default Search
