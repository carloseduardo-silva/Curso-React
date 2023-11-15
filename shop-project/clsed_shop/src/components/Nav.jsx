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

useEffect(() =>{
 
  if( datas.length == 0 ) {
    console.log('nao há items adicionados ao carrinho')
  }
  else{
    console.log(datas)
    setShopDatas(datas)
    
    
  }

},[])

  return (
    <div className={styles.container_nav}>
        <nav className={styles.desktop_nav}>
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
              
              <Link><span onClick={() =>(toggleModal())}  className="material-symbols-outlined menu-hamburguer">menu</span></Link>

              <Link><span onClick={() => confirmLogout()} className="material-symbols-outlined logout">logout</span></Link>
            </> }

           

            </div>
        </nav>

      {navMobileShow && 
        <nav  className={styles.mobile_nav}>

        <h1>navMobile</h1>
        <Link><span onClick={() =>(toggleModal())} className="material-symbols-outlined shops">close</span></Link>

        </nav>
        }

          {navShopShow && 
            <nav  className={styles.mobile_nav}>

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
                    <input value={JSON.parse(data).amount}  type="number" name="amount" id="amount" />
                    <a onClick={() =>{excludeProduct(JSON.parse(data))}} > Retirar </a>
                  </div>

                  
                  
                </div>
               ))}
            </div>

            <div className={styles.shop_summary}>
              {(datas.length == 0) ?<p>Não há items adicionados ao carrinho!</p> :
              <> <p> Seu subtotal hoje é R$ {totalValue},00. Taxas e frete calculados na próxima pagina</p>
              <Link><button> Compre Já</button></Link>
 </>
               
              }
            </div>
            

            </nav>
            }
      
    </div>
  )
}

export default Nav
