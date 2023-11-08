import {useState} from 'react'
import { Link } from "react-router-dom"
import styles from "./Home.module.css"
import Nav from '../../components/Nav'




const Home = () => {
  return (
    <div>
        <Nav/>

        <div className={styles.shop_container}>
            <h2>Shop</h2>
            <div  className={styles.card_container}>
               <Link to={`/products/1`}>  <div className={styles.card}>
                   <div className={styles.img_card}>
                    <img src="https://cptv.com.br/cdn/shop/products/Frente_Equilibrio_Preta.png?v=1659109528&width=265" alt="camiseta" />
                   </div>
                   <p> Camiseta Captive BR</p>
                   <p> R$ 179,00</p>
                </div></Link>

                <Link to={`/products/2`}>
                    <div className={styles.card}>
                       <div className={styles.img_card}>
                        <img src="https://cptv.com.br/cdn/shop/products/Frente_Mente_Fertil.png?v=1659109452&width=265" alt="camiseta" />
                       </div>
                       <p> Camiseta Captive BR</p>
                       <p> R$ 179,00</p>
                    </div>
                </Link>

                <Link to={`/products/3`}>
                    <div className={styles.card}>
                       <div className={styles.img_card}>
                        <img src="https://cptv.com.br/cdn/shop/products/image_6b10c2b5-9573-4b04-b93f-4421ffc3c452.png?v=1666884369&width=265" alt="camiseta" />
                       </div>
                       <p> Camiseta Captive BR</p>
                       <p> R$ 179,00</p>
                    </div>
                </Link>
               
               

            </div>

        </div>
        
    </div>
  )
}

export default Home
