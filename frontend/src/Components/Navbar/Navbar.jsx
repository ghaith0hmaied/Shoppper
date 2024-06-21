import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { useState } from 'react'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import DropDown from '../Assets/navigation-bar.png'
const Navbar = () => {
    const[menu,setMenu]=useState("shop");

    const {getTotalCartItems} = useContext(ShopContext);

    const menuRef=useRef();
    const DropDown_toggle = (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>shopper</p>
        </div>
        <img className='navdoropdown' onClick={DropDown_toggle} src={DropDown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"? <hr/>:<></>} </li>
        <li onClick={()=>{setMenu("wemen")}}><Link style={{textDecoration:'none'}} to='/wemen'>Women</Link> {menu==="wemen"? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
