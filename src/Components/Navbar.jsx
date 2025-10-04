import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../css/navbar.css' 

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <button className='logo'>
          <FontAwesomeIcon icon={faBagShopping} />
          <span>Store</span>
        </button>
      </div>
      <div className='navbar-center'>
        <input type='text' placeholder='Search' className='search-input' />
      </div>
      <div className='navbar-right'>
        <button className='wishlist-btn'>
          <FontAwesomeIcon icon={faHeart} />
          <span>0</span>
        </button>
        <button className='cart-btn'>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>0</span>
        </button>
        <button className='login-btn'>Log In</button>
      </div>
    </div>
  )
}