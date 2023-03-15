import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import NavBar from "../../Components/NavBar/NavBar"
import CartWidget from '../../Components/CartWidget/CartWidget';


const Header = () => {

  return (
    <header>
      <div className='wrapper'>
        <span className='logo'>
          <Link to={"/"}>PETROLEO</Link>
        </span>
        <NavBar />
        <CartWidget />
      </div>
    </header>
  )
}

export default Header