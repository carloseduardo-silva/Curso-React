import {Link, NavLink} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav> 

            <ul> 
                <li> <NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
            </ul>
          
         
       
        </nav>
      
    </div>
  )
}

export default Navbar
