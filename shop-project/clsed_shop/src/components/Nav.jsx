import React from 'react'
import styles from "./Nav.module.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className={styles.container_nav}>
        <nav>
            <Link to={'/'}>
              <div style={{color:'white'}} className={styles.logo}>CL <span>SED</span></div>
            </Link>

            <div className={styles.container_icons}>
            <Link to={'/login'}><span className="material-symbols-outlined">account_circle</span></Link>

            <Link><span className="material-symbols-outlined">search</span></Link>

            <Link><span className="material-symbols-outlined">shopping_cart</span></Link>

            </div>
        </nav>
      
    </div>
  )
}

export default Nav
