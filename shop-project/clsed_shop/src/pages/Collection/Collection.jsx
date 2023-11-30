import {useLayoutEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


//css
import styles from './Collection.module.css'

//components
import Nav from '../../components/Nav'

//hooks
import { useFetchDatas } from '../../hooks/useFetchDatas'

const Collection = () => {

const [search, setSearch] = useState(null)
const[sizeModalShow, setSizeModalShow] = useState(false)
const[orderModalShow, setOrderModalShow] = useState(false)
const[priceModalShow, setPriceModalShow] = useState(false)

const { section } = useParams()

useLayoutEffect(() =>{
  
  switch(section){
    case 'all':
      setSearch(null)
      break;
    
    case 'shirts':
      setSearch("camiseta")
      break;

    case 'jackets':
      setSearch('moletom')
      break;
        
    case 'bottom':
      setSearch('bottom')
      break;

    case 'acessories':
      setSearch('acessório')
      break;

          

  }})



const {datas, loading, error } = useFetchDatas('products', search )

const togglePriceModalShow = () =>{
  if(priceModalShow){
    setPriceModalShow(false)
  } else{
    setPriceModalShow(true)
  }
}

const toggleSizeModalShow = () =>{
  if(sizeModalShow){
    setSizeModalShow(false)
  } else{
    setSizeModalShow(true)
  }
}

const toggleOrderModalShow = () =>{
  if(orderModalShow){
    setOrderModalShow(false)
  } else{
    setOrderModalShow(true)
  }
}

  return (
    <div>
      <Nav/>

      <div className={styles.collection_container}>

        <div className={styles.filter_container}>

          <div onClick={() => toggleSizeModalShow()} className={styles.filter_Card}>
          <p>Tamanho</p>
          {!sizeModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {sizeModalShow &&<span class="material-symbols-outlined">expand_less</span>}</div>

          {sizeModalShow &&  
          <form>
              <label>
                <input type="checkbox" name="P/S" id="P/S" />
                P/S
              </label>
              <label>
                <input type="checkbox" name="M" id="M" />
                M
              </label>
              <label>
                <input type="checkbox" name="G/L" id="G/L" />
                G/L
              </label>
              <label>
                <input type="checkbox" name="GG/XL" id="GG/XL" />
                GG/XL
              </label>

              <label>
                <input type="checkbox" name="" id="XGG/XXL" />
                XGG/XXL
              </label>
        
            
          </form>}


          <div onClick={() => togglePriceModalShow()} className={styles.filter_Card}>
            <p>Preço</p>
          {!priceModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {priceModalShow &&<span class="material-symbols-outlined">expand_less</span>}
          </div>

          {priceModalShow &&  
          <div  className={styles.filter_price}>
            <input type="number" />   
            -
             <input type="number" />  
          </div>}


          <div onClick={() => toggleOrderModalShow()} className={styles.filter_Card}>
            <p>Ordenar</p>
          {!orderModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {orderModalShow &&<span class="material-symbols-outlined">expand_less</span>}
          </div>

          {orderModalShow &&  
          <form>
            <label>
              <input type="radio" name="Destaques" id="Destaques" />
              Em Destaques
            </label>
            <label>
              <input type="radio" name="Mais-VendidosAlfabética" id="Mais-VendidosAlfabética" />
              Mais Vendidos
            </label>
            <label>
              <input type="radio" name="Alfabética" id="Alfabética" />
              Ordem Alfabética
            </label>
            <label>
              <input type="radio" name="Menor-preço" id="Menor-preço" />
              Menor Preço
            </label>

            <label>
              <input type="radio" name="Maior-preço" id="Maior-preço" />
              Maior Preço
            </label>
        
            
          </form>}

        </div>

        <div className={styles.productsQuery_container}>
          {datas.length == 0 && <p>Carregando produtos...</p>}
          {datas.length > 0 &&  datas.map((product) =>(
            <div className={styles.product_Card} key={product.idProduct}>
              <div>
                <img src={product.URLimage} alt={product.name} />
              </div>

              <div>
                <p>{product.name}</p>
                <p>R${product.price}.00</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Collection
