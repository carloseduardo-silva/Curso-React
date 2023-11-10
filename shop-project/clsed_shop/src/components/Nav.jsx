import {useState, useRef} from 'react'
import styles from "./Nav.module.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { userAuthValue } from '../context/Auth'
import { useAuthentication } from '../hooks/useAuthentication'



const Nav = () => {

  const[inputShow, setinputShow] = useState(false)
  const[navMobileShow, setnavMobileShow] = useState(false)
  const[navShopShow, setnavShopShow] = useState(false)
  const [productQuery, setProductQuery] = useState(null)



  const Navigate = useNavigate()


  const {user} = userAuthValue()
  const {logout} = useAuthentication()

  const confirmLogout = () =>{
    if(window.confirm('Deseja realmente sair?')){
      logout()

    }else{
      return}
  }

  const handleQuery = (e) =>{
    e.preventDefault()
    if(productQuery){
      console.log(productQuery)
     return Navigate(`/search?q=${productQuery}`)
    }else{
      setinputShow(false)
    }
     
  }

  

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

            <h1>Shop</h1>
            <Link><span onClick={() =>(toggleShopModal())} className="material-symbols-outlined shops">close</span></Link>

            </nav>
            }
      
    </div>
  )
}

export default Nav
