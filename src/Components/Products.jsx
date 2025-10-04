import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import '../css/products.css';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className='productList'>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price : ₹ {Math.round(product.price * 80)}/-</p>
            <div className="product-actions">
              <button className="add-to-cart-btn">
                <FontAwesomeIcon icon={faCartShopping} />
                Add To Cart
              </button>
              <button className="add-to-wishlist-btn">
                <FontAwesomeIcon icon={faHeart} />
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};