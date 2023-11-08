import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


//css
import styles from "./Product.module.css"

//hooks
import { useFetchData } from '../../hooks/useFetchData'

//components
import Nav from '../../components/Nav'



const Product = () => {

  const [idProduct, setIdProduct] = useState(0)

    const { id } = useParams()

    const {data, loading, error} = useFetchData('products', null, id)
    console.log(data)

    useEffect(()=>{
        setIdProduct(id)
        
    }, [])
   

  return (
    <div>
      <Nav/>

        <div className={styles.product_container}> 
        
          <div className={styles.img_container}>
              <img src={data.URLimage} alt="camiseta" />
          </div>

          <div className={styles.product_info}>
                <h2> {data.name}</h2>
                <span>R${data.price},00</span>

                <form>
                  
                <label>
                  <p>Tamanho</p>
                  <select name="sizes" id="sizes">
                    <option value="P/S">P/S</option>
                    <option value="M">M</option>
                    <option value="G/L">G/L</option>
                    <option value="GG/XL">GG/XL</option>
                  </select>
                </label>

                <label>
                  <p>Quantidade</p>
                  <input min={0} type="number" name="amount" id="amount" />
                </label>

                <button type='submit'>Compre já</button>

                </form>


          </div>

        </div>

        <div className={styles.apresentation}>
          <p>Mais que uma marca...</p>

          <p>Somos referencia no streetwear nacional desde 2015</p>

          <p>Vestimos alguns dos artistas e criadores mais influentes do momento</p>

          <p>Mais de 20mil pedidos enviados para o mundo inteiro</p>

          <p>  
            Produtos de qualidade feitos para durarem décadas
          </p>

          <p>Mais de 2mil membros ativos no Captive Club
            </p>  
        </div>


      
    </div>
  )
}

export default Product
