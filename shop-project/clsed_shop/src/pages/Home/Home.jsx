import {useState} from 'react'
import { Link } from "react-router-dom"

//css
import styles from "./Home.module.css"

//components
import Nav from '../../components/Nav'

//hooks
import { useFetchDatas } from '../../hooks/useFetchDatas'





const Home = () => {

    const {datas, loading, error} = useFetchDatas('products')
    datas.map((data) => (console.log(data)))

  return (
    <>
        <Nav/>

        <div className={styles.shop_container}>
            <h1>Shop</h1>
           
            <div  className={styles.card_container}>

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

export default Home
