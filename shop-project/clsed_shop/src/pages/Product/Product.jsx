import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


//css
import styles from "./Product.module.css"

//hooks
import { useFetchData } from '../../hooks/useFetchData'
import { useToLocalStorage } from '../../hooks/useToLocalStorage'
import { useGetLocalStorage } from '../../hooks/useGetLocalStorage'

//components
import Nav from '../../components/Nav'
import { useCounterValue } from '../../hooks/useCounterValue'




const Product = () => {

  
  const [size, setSize] = useState(null)
  const [amount, setAmount] = useState(null)
  const [validateError, setValidateError] = useState(null)


 

    const { id } = useParams()

    const {data, loading, error:fetchError} = useFetchData('products', null, id)

    const {datas} = useGetLocalStorage()

    const {counterValue} = useCounterValue(datas)
  

  
  

    const handleProduct = (e) =>{
      e.preventDefault()
      
      let btn = e.nativeEvent.submitter.value

      switch(btn){
        case 'addShop':
          addShop()
          break

        case 'buyNow':
          //buyNow()
          break
      }
    }

    function addShop(){

      if(!size){
        setValidateError('Por favor selecione o tamanho.')
      
      } else if(!amount){
        setValidateError('Por favor selecione a quantidade.')

      }
      else{
      
        setValidateError(null)

        var counter;
        //first product in the shoppingCart
        if(datas.length == 0){
          counter = datas.length+1
          console.log('datas.length')
          
          //another one product in the shoppingCart
        } else{
          console.log('counter value')
          counter = counterValue+1
          
        }

        const shopDatas = {
          name: data.name,
          price: data.price,
          id: data.idProduct,
          URLimage: data.URLimage,
          key: counter,
          size,
          amount,
        }


        //pass object with the datas of the products to the localstorage
       if(useToLocalStorage(shopDatas, counter)){
        window.location.reload()
     
        
       }
      }

      
    }
   

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

                <form onSubmit={handleProduct}>
                  
                <label>
                  <p>Tamanho</p>
                  <select  onChange={(e) => setSize(e.target.value)} name="sizes" id="sizes">
                    <option value="P/S">P/S</option>
                    <option value="M">M</option>
                    <option value="G/L">G/L</option>
                    <option value="GG/XL">GG/XL</option>
                  </select>
                </label>

                <label>
                  <p>Quantidade</p>
                  <input onChange={(e) => setAmount(e.target.value)} min={0} type="number" name="amount" id="amount" />
                </label>

                <button value='buyNow' className={styles.buyNow} type='submit'>Compre já</button>

                <button value='addShop' className={styles.addShop} type='submit'>Adicionar ao carrinho</button>
                {validateError && <p> {validateError}</p>}

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
