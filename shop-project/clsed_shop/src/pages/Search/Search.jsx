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
  const [sizeModalShow, setSizeModalShow] = useState(false)
  const [orderModalShow, setOrderModalShow] = useState(false)
  const [priceModalShow, setPriceModalShow] = useState(false)
  const [sizeMobileModalShow, setMobileSizeModalShow] = useState(false)
  const [orderMobileModalShow, setMobileOrderModalShow] = useState(false)
  const [priceMobileModalShow, setMobilePriceModalShow] = useState(false)
  const [filterOrderCounter, setFilterOrderCounter] = useState(null)
  const [filterSizes, setFilterSizes] = useState(null)
  const [filterMinPrice, setFilterMinPrice] = useState(0)
  const [filterMaxPrice, setFilterMaxPrice] = useState(349)


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

  //Events and Listeners from Image hover on products card
  let urlBack = ''
  let urlFront = ''
  document.querySelectorAll('#productCard').forEach((card) =>{
    card.addEventListener('mouseover', () =>{
      datas.map((product) =>{
        if(product.idProduct == card.dataset.id){
          urlBack = product.CarrouselIMG['1']
          return
        }
      })
      card.querySelector('.cardImg').src = urlBack
    })
  })

  document.querySelectorAll('#productCard').forEach((card) =>{
    card.addEventListener('mouseout', () =>{
      datas.map((product) =>{
        if(product.idProduct == card.dataset.id){
          urlFront = product.CarrouselIMG['0']
          return
        }
      })
      card.querySelector('.cardImg').src = urlFront
    })
  })

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
    <>
        <Nav/>
        { <p className={styles.search}> Pesquisa por: "{search}" </p> }
      <div className={styles.search_container}>

      {load && <div className={styles.loading}></div> }

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

       

        <div className={styles.card_container}>
        
          {datas.length > 0 ? datas.map((product) =>(
                   <Link to={`/products/${product.idProduct}`} className={styles.product_Card}  id='productCard' data-id={product.idProduct}>
                   <div  key={product.idProduct}>
                     <div>
                       <img class="cardImg" src={product.URLimage} alt={product.name} />
                     </div>
                     <div>
                       <p className={styles.data_name}>{product.name}</p>
                       <p>R${product.price}.00</p>
                     </div>
                   
                   </div>
                 </Link>
           )) : <h2 className={styles.NotFound_product}>Não foi encontrado nenhum produto!</h2>}

           
        </div>

      </div>
    </>
  )
}

export default Search
