import {NavLink} from 'react-router-dom'
import { useAuthentication } from '../hooks/useAuthentication'
import{userAuthValue} from "../context/Auth"
import styles from "./Navbar.module.css"



const NavBar = () => {

  const {user} = userAuthValue()
  console.log(user)

  const { logout } = useAuthentication()

  return (

    <div>
      <nav className={styles.navbar}>
        <NavLink to={'/'} className={styles.brand} > Mini <span> Blog</span> </NavLink> 
        
        <ul className={styles.links_list}>

          <li>
            <NavLink to={'/'}> Home  </NavLink>
          </li>

          {/* in case of the user are not signed in */}
          {!user && (<>
            <li>
            <NavLink to={'/login'}> Entrar </NavLink>
          </li>

          <li>
            <NavLink to={'/register'}> Cadastrar </NavLink>
          </li>

          </>)}


            {/* in case of the user are signed in */}
          {user && (
          <>
          <li>
            <NavLink to={'/post/create'}>
            Novo Post
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>
            DashBoard
            </NavLink>
          </li>

          </>)}

          <li>
            <NavLink to={'/about'}> About </NavLink>
          </li>

            {user && (<li> 
              <button className={styles.logout_btn} onClick={logout}> Sair </button>
              </li>)}

            
        </ul>
      </nav>
 
    </div>
  )
}

export default NavBar
