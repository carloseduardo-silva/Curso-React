import { useState, useEffect, useLayoutEffect } from 'react'
import Nav from '../../components/Nav'

import { useFetchDatas } from '../../hooks/useFetchDatas'
import { useQuery } from '../../hooks/useQuery'
import { Link } from 'react-router-dom'

//css
import styles from "./Search.module.css"

const Search = () => {

  const[load, setLoad] = useState([1])
  const[lastQuery, setLastQuery] = useState(null)
  const[productDatas, setProductDatas] = useState(null)

  //catch param from url
  const productQuery = useQuery()
  const search = productQuery.get('q')


  const {datas, loading, error } = useFetchDatas('products', search )


  useEffect(() =>{
    if(search){
      setLastQuery(search)
      console.log(lastQuery)
    }
  },[search])

  useEffect(() =>{
    if(lastQuery && search && lastQuery !== search){
      window.location.reload()
      

    }
  },[search])

  useEffect(() => {
    
    setLoad(loading)
    setProductDatas(datas)
  })

  


  return (
    <>
        <Nav/>

      <div className={styles.search_container}>
      {load && <div className={styles.logo}></div> }

        {datas.length > 0 && <> <p className={styles.search}> Pesquisa por: "{search}" </p> </>}

        <div className={styles.card_container}>

          {datas.length > 0 ? datas.map((data) =>(
                    <Link to={`/products/${data.idProduct}`}>
                    <div key={data.idProduct} className={styles.card}>

                        <div className={styles.img_card}>
                            <img src={data.URLimage} alt="camiseta" />
                        </div>
                        <p className={styles.data_name}> {data.name}</p>
                        <p> R${data.price},00</p>
                    </div>
                 </Link>
           )) : <h2 className={styles.NotFound_product}>Não foi encontrado nenhum produto!</h2>}

           
        </div>

      </div>
    </>
  )
}

export default Search
