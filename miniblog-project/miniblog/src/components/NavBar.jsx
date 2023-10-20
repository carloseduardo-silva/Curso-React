import {NavLink} from 'react-router-dom'

import styles from "./Navbar.module.css"

const NavBar = () => {
  return (

    <div>
      <nav className={styles.navbar}>
        <NavLink to={'/'} className={styles.brand} > Mini <span> Blog</span> </NavLink> 
        
        <ul className={styles.links_list}>
          <li>
            <NavLink to={'/'}> Home  </NavLink>
          </li>

          <li>
            <NavLink to={'/login'}> Entrar </NavLink>
          </li>

          <li>
            <NavLink to={'/register'}> Cadastrar </NavLink>
          </li>

          <li>
            <NavLink to={'/about'}> About </NavLink>
          </li>
        </ul>
      </nav>
 
    </div>
  )
}

export default NavBar
