import {Component, useEffect, useLayoutEffect, useState, useMemo} from 'react'
import { useParams } from 'react-router-dom'


//css
import styles from './Collection.module.css'

//components
import Nav from '../../components/Nav'

//hooks
import { useFetchDatas } from '../../hooks/useFetchDatas'
import { useFetchCollection } from '../../hooks/useFetchCollection'

const Collection = () => {

const [lastQuery, setLastQuery] = useState(null)
const [search, setSearch] = useState(null)
const [sizeModalShow, setSizeModalShow] = useState(false)
const [orderModalShow, setOrderModalShow] = useState(false)
const [priceModalShow, setPriceModalShow] = useState(false)
const [sizeMobileModalShow, setMobileSizeModalShow] = useState(false)
const [orderMobileModalShow, setMobileOrderModalShow] = useState(false)
const [priceMobileModalShow, setMobilePriceModalShow] = useState(false)
const [filterOrder, setFilterOrder] = useState(null)
const [filterOrderCounter, setFilterOrderCounter] = useState(null)
const [filterSizes, setFilterSizes] = useState(null)
const [filterMinPrice, setFilterMinPrice] = useState(0)
const [filterMaxPrice, setFilterMaxPrice] = useState(349)



const { section } = useParams()


//UseEffects

useLayoutEffect(() =>{

switch(section){
  case 'all':
    setSearch('all')
    break;
  
  case 'camiseta':
    setSearch("camiseta")
    break;

  case 'moletom':
    setSearch('moletom')
    break;
      
  case 'bottom':
    setSearch('bottom')
    break;

  case 'acessories':
    setSearch('acessório')
    break;

        

}})



  useEffect(() =>{
  setFilterOrderCounter(1)
  console.log(filterOrder)
  //loadDatas(filterOrder)

}, [filterOrder])

  useEffect(() =>{

  console.log(filterSizes)
  //loadDatas(filterSizes)

}, [filterSizes])


//hook fetching datas
const {datas, loading, error} = useFetchDatas('products', search)



useEffect(() =>{
  if(!search ){
    setLastQuery(section)
  }
  else if(lastQuery && lastQuery !== section){
    window.location.reload()
  }
}, [search])

//fn
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
    setFilterOrderCounter(null)
  } else{
    setOrderModalShow(true)
  }
}

const toggleMobilePriceModalShow = () =>{
  if(priceMobileModalShow){
    const body = document.querySelector('body')
    body.classList.remove('transparent2')
    setMobilePriceModalShow(false)
    
  } else{
    const body = document.querySelector('body')
    body.classList.toggle('transparent2')
    setMobilePriceModalShow(true)
  }
}

const toggleMobileSizeModalShow = () =>{
  if(sizeMobileModalShow){
    const body = document.querySelector('body')
    body.classList.remove('transparent2')
    setMobileSizeModalShow(false)
  } else{
    const body = document.querySelector('body')
    body.classList.toggle('transparent2')
    setMobileSizeModalShow(true)
  }
}

const toggleMobileOrderModalShow = () =>{
  if(orderMobileModalShow){
    const body = document.querySelector('body')
    body.classList.remove('transparent2')
    setMobileOrderModalShow(false)
  } else{
    const body = document.querySelector('body')
    body.classList.toggle('transparent2')
    setMobileOrderModalShow(true)
  }
}


const handleFilterPrice = (e) =>{
    e.preventDefault()
  //basear-se no useGraphGenerator refatorar para utilizar Chamadas assincronas de dados, diretamente pelas funções e nao pela chamada do Hook.
    
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
          <form className={styles.filterCheck}>
              <label>
                <input onChange={(e) =>{setFilterSizes(e.target.value)}} type="checkbox" name="P/S" id="P/S" value="P/S" />
                P/S
              </label>
              <label>
                <input onChange={(e) =>{setFilterSizes(e.target.value)}} type="checkbox" name="M" id="M" value="M" />
                M
              </label>
              <label>
                <input onChange={(e) =>{setFilterSizes(e.target.value)}} type="checkbox" name="G/L" id="G/L" value="G/L" />
                G/L
              </label>
              <label>
                <input onChange={(e) =>{setFilterSizes(e.target.value)}} type="checkbox" name="GG/XL" id="GG/XL" value="GG/XL" />
                GG/XL
              </label>

              <label>
                <input onChange={(e) =>{setFilterSizes(e.target.value)}} type="checkbox" name="XGG/XXL" id="XGG/XXL" value="XGG/XXL" />
                XGG/XXL
              </label>
        
            
          </form>}


          <div onClick={() => togglePriceModalShow()} className={styles.filter_Card}>
            <p>Preço</p>
          {!priceModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {priceModalShow &&<span class="material-symbols-outlined">expand_less</span>}
          </div>

          {priceModalShow &&  
          <form  className={styles.filter_price}>
            <label>R$<input value={filterMinPrice} onChange={(e) =>{setFilterMinPrice(e.target.value)}} placeholder='0' type="number" />  </label> 

              <h2>-</h2>

             <label> R$<input value={filterMaxPrice} onChange={(e) =>{setFilterMaxPrice(e.target.value)}} placeholder='349'  type="number" />  </label>

              <button onSubmit={handleFilterPrice}> Filtrar</button>

          </form>}


          <div onClick={() => toggleOrderModalShow()} className={styles.filter_Card}>
            <p>Ordenar {filterOrderCounter &&`(${filterOrderCounter})`}</p>
          {!orderModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {orderModalShow &&<span class="material-symbols-outlined">expand_less</span>}
          </div>

          {orderModalShow &&  
          <form className={styles.filterCheck}>
            <label>
              <input onChange={(e) => {setFilterOrder(e.target.value)}} type="radio" name="order" id="Destaques" value="Destaques" />
              Em Destaques
            </label>
            <label>
              <input onChange={(e) => {setFilterOrder(e.target.value)}} type="radio" name="order" id="Mais-Vendidos"  value="Mais-Vendidos"/>
              Mais Vendidos
            </label>
            <label>
              <input onChange={(e) => {setFilterOrder(e.target.value)}} type="radio" name="order" id="Alfabética" value="Alfabética" />
              Ordem Alfabética
            </label>
            <label>
              <input onChange={(e) => {setFilterOrder(e.target.value)}} type="radio" name="order" id="Menor-preço" value="Menor-preço" />
              Menor Preço
            </label>

            <label>
              <input onChange={(e) => {setFilterOrder(e.target.value)}} type="radio" name="order" id="Maior-preço" value="Maior-preço" />
              Maior Preço
            </label>
        
            
          </form>}

        </div>

        <div className={styles.filterMobile_container}>

          <div onClick={() => toggleMobileSizeModalShow()} className={styles.filter_Card}>
          <p>Tamanho</p>
          {!sizeMobileModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {sizeMobileModalShow &&<span class="material-symbols-outlined">expand_less</span>}</div>

  


          <div onClick={() => toggleMobilePriceModalShow()} className={styles.filter_Card}>
            <p>Preço</p>
          {!priceMobileModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {priceMobileModalShow &&<span class="material-symbols-outlined">expand_less</span>}
          </div>

          


          <div onClick={() => toggleMobileOrderModalShow()} className={styles.filter_Card}>
            <p>Ordenar</p>
          {!orderMobileModalShow &&<span class="material-symbols-outlined expand">expand_more</span>}
          {orderMobileModalShow &&<span class="material-symbols-outlined">expand_less</span>}
          </div>


        </div>


        <div className={styles.productsQuery_container}>
          {datas.length == 0 && <p>Carregando produtos...</p>}
          {datas.length > 0 &&  datas.map((product) =>(
            <div className={styles.product_Card} key={product.idProduct}>
              <div>
                <img src={product.URLimage} alt={product.name} />
              </div>

              <div>
                <p className={styles.data_name}>{product.name}</p>
                <p>R${product.price}.00</p>
              </div>
            </div>
          ))}

        </div>

      </div>


    {sizeMobileModalShow &&  
        <div className={styles.filterMobile_modal}>

          <div className={styles.filter_Header}>
            <h2>Tamanho</h2> 
            <span onClick={() => toggleMobileSizeModalShow()}  class="material-symbols-outlined">close</span>
          </div>

            <form className={styles.filterCheck}>
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

            
          </form>
        </div>}

    {priceMobileModalShow && 
     <div className={styles.filterMobile_modal}>

        <div className={styles.filter_Header}>
            <h2>Preço</h2> 
            <span onClick={() => toggleMobilePriceModalShow()}  class="material-symbols-outlined">close</span>
        </div>

       <form  className={styles.filter_price}>
        <label>R$<input placeholder='0' type="number" />  </label> 

          <h2>-</h2>

        <label> R$<input placeholder='349'  type="number" />  </label>

      </form>
     </div>}

     {orderMobileModalShow &&  
         <div className={styles.filterMobile_modal}>

            <div className={styles.filter_Header}>
              <h2>Ordenar</h2> 
              <span onClick={() => toggleMobileOrderModalShow()} class="material-symbols-outlined">close</span>
            </div>

           <form className={styles.filterCheck}>
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
            </form>
         </div>
            }




    </div>

    



  )
}

export default Collection
