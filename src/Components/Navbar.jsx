import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../Features/productSlice'
import { useNavigate } from 'react-router-dom'
import '../css/navbar.css' 

export const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity)
  const wishlistTotalQuantity = useSelector((state) => state.wishlist.totalQuantity)
  const searchTerm = useSelector((state) => state.products.searchTerm)

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <button className='logo' onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faBagShopping} />
          <span>Store</span>
        </button>
      </div>
      <div className='navbar-center'>
        <input
          type='text'
          placeholder='Search'
          className='search-input'
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </div>
      <div className='navbar-right'>
        <button className='wishlist-btn'>
          <FontAwesomeIcon icon={faHeart} />
          <span>{wishlistTotalQuantity}</span>
        </button>
        <button className='cart-btn' onClick={() => navigate('/cart')}>
          <FontAwesomeIcon icon={faCartShopping} />
          <span>{cartTotalQuantity}</span>
        </button>
        <button className='login-btn'>Log In</button>
      </div>
    </div>
  )
}