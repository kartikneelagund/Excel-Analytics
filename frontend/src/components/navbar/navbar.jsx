import React from "react";
import "./navbar.css"
// import Home from '../../Components/Hero/Hero'
// import logo from '../../assets/logo.png';
// import underline from '../../assets/underline.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import menu_open from '../../assets/menu_open.svg'
// import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {


  return (
  
    
    <div className='navbar'>
        <p>Excel Analytics</p>
        <ul  className='nav-menu '>
            <li className='nav-connect'>Log in</li>
            <li className='nav-connect'>Sign in</li>
        </ul>
    </div>

  )
}

export default Navbar