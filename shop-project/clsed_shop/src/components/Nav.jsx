import React from 'react'
import styles from "./Nav.module.css"
const Nav = () => {
  return (
    <div className={styles.container_nav}>
        <nav>
            <div className={styles.logo}>CL <span>SED</span></div>

            <div className={styles.container_icons}>
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">search</span>
            <span className="material-symbols-outlined">shopping_cart</span>

            </div>
        </nav>
      
    </div>
  )
}

export default Nav
