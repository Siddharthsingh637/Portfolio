import React from 'react'
import "./Navbar.css";
// import Logo from "../../assets/logo.svg";


const Navbar = () => {
  return (
    <div className='Navbar'>
        <h2 className='logo'>Siddharth</h2>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
      
    </div>
  )
}

export default Navbar
