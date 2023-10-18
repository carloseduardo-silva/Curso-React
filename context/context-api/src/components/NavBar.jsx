
import {NavLink} from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <div className='menu-nav'>
        <nav>
            <NavLink to={'/firstPage'}><h3> First Page </h3></NavLink>
            <NavLink to={'/secondPage'}> <h3>Second Page</h3></NavLink>
            <NavLink to={'/thirdPage'}><h3> Third Page</h3></NavLink>

        </nav>
      
    </div>
  )
}

export default NavBar
