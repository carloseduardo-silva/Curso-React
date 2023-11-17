import {useState, useRef, useEffect} from 'react'
import styles from "./Nav.module.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'

//context
import { userAuthValue } from '../context/Auth'

//hooks
import { useAuthentication } from '../hooks/useAuthentication'
import { useGetLocalStorage } from '../hooks/useGetLocalStorage'
import { useExcludeLocalStorage } from '../hooks/useExcludeLocalStorage'
import { useTotalValueShop }  from '../hooks/useTotalValueShop'
import { useAddItem } from '../hooks/useAddItem'
import { useRemoveItem } from '../hooks/useRemoveItem'
import { useToLocalStorage } from '../hooks/useToLocalStorage'




const Nav = () => {

  const[inputShow, setinputShow] = useState(false)
  const[navMobileShow, setnavMobileShow] = useState(false)
  const[navShopShow, setnavShopShow] = useState(false)
  const[productQuery, setProductQuery] = useState(null)
  const[shopDatas, setShopDatas] = useState([])



  const Navigate = useNavigate()


  const {user} = userAuthValue()
  const {logout} = useAuthentication()
  //get the datas from localstorage, to show in shoppingCart
  const { datas } = useGetLocalStorage()

  const {totalValue} = useTotalValueShop(datas)

 
 

  //signOut
  const confirmLogout = () =>{
    if(window.confirm('Deseja realmente sair?')){
      logout()

    }else{
      return}
  }

  //query products
  const handleQuery = (e) =>{
    e.preventDefault()
    if(productQuery){
    
      
     return Navigate(`/search?q=${productQuery.toLowerCase()}`)
    }else{
      setinputShow(false)
    }
     
  }

  //sidebar modal
  const toggleModal = () =>{
      if(navMobileShow){
        setnavMobileShow(false)
      } else{
        setnavMobileShow(true)
      }
  }

  const toggleShopModal = () =>{
    if(navShopShow){
      setnavShopShow(false)
    } else{
      setnavShopShow(true)
    }
}

const excludeProduct = (data) =>{
  
 if( useExcludeLocalStorage(data.key)){
  window.location.reload()
 }
}


const addItem = (data) =>{
  let newAmount = data.amount + 1
  
  const {productData} = useAddItem(data, newAmount)
  
  useToLocalStorage(productData, productData.key)
  window.location.reload()
 
}

const removeItem = (data) =>{

  if(data.amount == 1){
      return
  }
  else{
      let newAmount = data.amount - 1
  
      const {productData} = useRemoveItem(data, newAmount)
      
      useToLocalStorage(productData, productData.key)
      window.location.reload()
     
  }

}


useEffect(() =>{
 
  if( datas.length == 0 ) {
    console.log('nao há items adicionados ao carrinho')
  }else{
    setShopDatas(datas)
  }

},[])

  return (
    <div className={styles.container_nav}>
    {/*  DeskTop Nav */}
        <nav className={styles.desktop_nav}>

              {user && 
              <Link class='menu-hamburguer'><span style={{color:'white', fontSize:'1em' }} onClick={() =>(toggleModal())}  className="material-symbols-outlined menu-hamburguer">menu</span></Link>
              }
            
            <div className={styles.utilities}>
              
              <div className={styles.utilities_card}>
                <p> Loja Online </p> <span class="material-symbols-outlined expand">expand_more</span>
              </div>

              <div className={styles.utilities_card}>
                <p> Ajuda </p> 
              </div>

            </div>


            <Link to={'/'}>
              <div style={{color:'white'}} className={styles.logo}>CL <span>SED</span></div>
            </Link>

            <div className={styles.container_icons}>

            {/* no user authenticated */}
            {!user &&   <Link to={'/login'}><span className="material-symbols-outlined">account_circle</span></Link> }



            {(!inputShow && user) && <Link><span onClick={() => {setinputShow(true)}} className="material-symbols-outlined search">search</span></Link>}

            {(inputShow && user) && <>
           <form onSubmit={handleQuery}>
               <input onChange={(e) =>{setProductQuery(e.target.value)}} placeholder='O que voce esta procurando?' className={styles.query} type='text'/>
             <button type='submit' className="material-symbols-outlined search">search</button>
           </form>
      
            </>
            }
            
            
            {user && <> 
            
             
              <Link><span onClick={() =>(toggleShopModal())} className="material-symbols-outlined shops">shopping_cart</span></Link>
              
              

              <Link><span onClick={() => confirmLogout()} className="material-symbols-outlined logout">logout</span></Link>
            </> }

           

            </div>
        </nav>

      {/* Mobile Menu-Hamburguer */}
      {navMobileShow && 
        <nav  className={styles.mobile_nav}>

        <div className={styles.navMobile_header}>
        <form onSubmit={handleQuery}>
               <input onChange={(e) =>{setProductQuery(e.target.value)}} placeholder='Pesquisa' className={styles.mobileQuery} type='text'/>

             <button type='submit' className="material-symbols-outlined ">search</button>
        </form>
          
          <Link><span onClick={() =>(toggleModal())} className="material-symbols-outlined shops">close</span></Link>
        </div>

        <div className={styles.navMobile_info}>

          <div className={styles.navMobile_card}>
            <p> Loja Online </p> <span> > </span>
          </div>

          <div className={styles.navMobile_card}>
            <p> Lojas Físicas </p> 
          </div>

          <div className={styles.navMobile_card}>
            <p> Ajuda </p> <span> > </span>
          </div>
          
        </div>

        </nav>
      }

      {/* shoppingCart Nav */}
      {navShopShow && 
        <nav  className={styles.mobile_navShop}>

        <div className={styles.shop_header}>
          <h2>Carrinho</h2>
          <Link><span onClick={() =>(toggleShopModal())} className="material-symbols-outlined shops">close</span></Link>
        </div>


        <div className={styles.shop_itens}>
          {shopDatas && shopDatas.map((data) =>( 
            
            <div key={JSON.parse(data).key} className={styles.shop_card}>

              <div className={styles.shop_cardMain}>
                <div className={styles.card_image}><img src={JSON.parse(data).URLimage} alt="product" /></div>
                <div className={styles.card_info}>
                  <h4> {JSON.parse(data).name} </h4>
                  <p>R${JSON.parse(data).price}.00  </p>
                  <p>Tamanho: { JSON.parse(data).size}</p>
                </div>
              </div>

              <div className={styles.shop_cardBtn}>

              <div class="quantity">    
                        <button  style={{width:'31px'}}  onClick={() => removeItem(JSON.parse(data))}>-</button>
                        <input style={{width:'24px'}} value={JSON.parse(data).amount}  class="quantity" id="quantity" min="0" name="quantity"  type="number"/>
                        <button  style={{width:'31px'}}  onClick={() => addItem(JSON.parse(data))}>+</button>
                    </div>

                <a onClick={() =>{excludeProduct(JSON.parse(data))}} > Retirar </a>

              </div>

              
              
            </div>
            ))}
        </div>

        <div className={styles.shop_summary}>
          {(datas.length == 0) ?<p>Não há items adicionados ao carrinho!</p> :
          <> <p> Seu subtotal hoje é R$ {totalValue},00. Taxas e frete calculados na próxima pagina</p>
          <Link to={'/cart'}><button> Compre Já</button></Link>
</>
            
          }
        </div>
        

        </nav>
      }
      
    </div>
  )
}

export default Nav
