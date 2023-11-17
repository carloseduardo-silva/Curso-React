import { useState, useEffect, useLayoutEffect } from 'react'
import Nav from '../../components/Nav'

import { useFetchDatas } from '../../hooks/useFetchDatas'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

//css
import styles from "./Search.module.css"

const Search = () => {

  const[products, setProducts] = useState(null)
  const[load, setLoad] = useState(null)
  const[lastSearch, setLastSearch] = useState([])



  const productQuery = useQuery()
  const search = productQuery.get('q')
  console.log(search)


  
  const {datas, loading, error, loadData } = useFetchDatas('products', search )


  useEffect(() => {
    setLoad(loading)
    setProducts(datas)
   
  })

  

  useEffect(() =>{
    
    if(search){
      setLastSearch(search)
    }

    if(!search){
      //window.location.reload()
    }

    loadData()
  }, [search])

  console.log(lastSearch)


 

  

  return (
    <>
        <Nav/>

      <div className={styles.search_container}>
      {load ? <h1> Buscando produtos...</h1> : <h1> Resultado da pesquisa:</h1>}

        <div className={styles.card_container}>
          
          {products ? products.map((data) =>(
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
