import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../css/navbar.css' 

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='image'>
        <button className='logo' style={{ color: 'white' }}>
          <FontAwesomeIcon icon={faBagShopping} />
          <p>Store</p>
        </button>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search' />
        <button className='Favourite'><FontAwesomeIcon icon={faHeart} /></button>
        <button className='Cart'><FontAwesomeIcon icon={faCartShopping} /></button>
        <button className='Login'>Login</button>
      </div>
    </div>
  )
}