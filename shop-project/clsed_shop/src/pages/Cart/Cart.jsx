import {useState, useEffect} from 'react'

//css
import styles from './Cart.module.css'


//componentes
import Nav from '../../components/Nav'

//hooks
import { useGetLocalStorage } from '../../hooks/useGetLocalStorage'
import { useTotalValueShop } from '../../hooks/useTotalValueShop'

const Cart = () => {

const[shopDatas, setShopDatas] = useState(null)

const { datas } = useGetLocalStorage()

const {totalValue} = useTotalValueShop(datas)

useEffect(() =>{
 
    if( datas.length == 0 ) {
      console.log('nao há items adicionados ao carrinho')
    }else{
      setShopDatas(datas)
    }
  
  },[])
  

  return (
    <div >
        <Nav/>

        <div className={styles.cart_container}>
            <h1> Seu carrinho </h1>
            
            <div className={styles.cart_header}>
                <span style={{marginLeft:'1.5em'}}>PRODUTO</span>

                <div className={styles.cart_headerInfo}>
                    <span> QUANTIDADE</span>
                    <span> TOTAL </span>
                </div>
            </div>

            <div className={styles.cart_products}>

            {shopDatas && shopDatas.map((data) =>(
                <div className={styles.card_product}>

                    <div className={styles.product_1}>
                        
                            <img src={JSON.parse(data).URLimage} alt="" />
                       
                        <div className={styles.product_info}>
                            <p>{JSON.parse(data).name}</p>
                            <p>{JSON.parse(data).size}</p>
                            <p>R${JSON.parse(data).price},00</p>
                        </div>
                    </div>
                  
                    <div className={styles.product_2}>
                        <div> <input value={JSON.parse(data).amount} type="number" /></div>
                        <div>R$ {(JSON.parse(data).price * JSON.parse(data).amount)},00</div>
                    </div>

                </div>
                  ))}

               

            </div>

        <div className={styles.cart_subtotal}>
                <p> Subtotal: R${totalValue},00</p>
                <span> CLSEDCLUB (-R$ DESCONTO)</span>
                <p>R$ {totalValue},00</p>

                <p> Taxas e frete calculados na próxima página
                </p>

                <div className={styles.subtotal_btn}>
                    <button> Atualizar</button>
                    <button> Verificação de Compra</button>
                </div>
                

            </div>
        </div>

        
    </div>
  )
}

export default Cart
