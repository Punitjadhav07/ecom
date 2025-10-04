import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faWallet } from '@fortawesome/free-solid-svg-icons';
import { removeItemFromCart, increaseQuantity, decreaseQuantity } from '../Features/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css';

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Shopping Cart</h1>

      <div className="cart-content">
        <div className="cart-items-section">
          {items.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty. <span onClick={() => navigate('/')}>Start Shopping!</span></p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-image-container">
                  <img src={item.image} alt={item.title} className="cart-item-image" />
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-current-price">₹{(item.price * 80).toFixed(2)}</p>
                  <div className="cart-item-quantity-controls">
                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  </div>
                  <button className="cart-item-remove-btn" onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrashCan} /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-price-details-section">
          <h2 className="price-details-title">Price Details</h2>
          <div className="price-detail-row">
            <span>Price ({totalQuantity} item{totalQuantity !== 1 ? 's' : ''})</span>
            <span>₹{(totalAmount * 80).toFixed(2)}</span>
          </div>
          <div className="price-detail-row">
            <span>Delivery Charges</span>
            <span className="free-delivery">Free</span>
          </div>
          <div className="price-detail-row total-amount">
            <span>Total Amount</span>
            <span>₹{(totalAmount * 80).toFixed(2)}</span>
          </div>
          <button className="checkout-btn">
            <FontAwesomeIcon icon={faWallet} /> Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};
