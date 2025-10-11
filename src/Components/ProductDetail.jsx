import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';
import { addItemToCart } from '../Features/cartSlice';
import { addItemToWishlist } from '../Features/wishlistSlice';
import '../css/productDetail.css';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [selectedColor, setSelectedColor] = useState('white');
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="product-not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const colors = ['white', '#2c3e50', '#27ae60'];
  const rating = 4;

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  const handleAddToWishlist = () => {
    dispatch(addItemToWishlist(product));
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="product-image-section">
          <img src={product.image} alt={product.title} className="product-main-image" />
        </div>

        <div className="product-details-section">
          <div className="product-category">{product.category}</div>
          <h1 className="product-detail-title">{product.title}</h1>
          
          <div className="product-rating">
            {[...Array(5)].map((_, index) => {
              let starClass;
              if (index < rating) {
                starClass = 'star filled';
              } else {
                starClass = 'star empty';
              }
              return (
                <FontAwesomeIcon 
                  key={index}
                  icon={faStar} 
                  className={starClass}
                />
              );
            })}
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="color-selection">
            <label className="color-label">Color</label>
            <div className="color-swatches">
              {colors.map((color, index) => {
                let buttonClass;
                if (selectedColor === color) {
                  buttonClass = 'color-swatch selected';
                } else {
                  buttonClass = 'color-swatch';
                }
                return (
                  <button
                    key={index}
                    className={buttonClass}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                );
              })}
            </div>
          </div>

          <div className="product-detail-price">₹{Math.round(product.price * 80)}</div>

          <div className="product-detail-actions">
            <button className="wishlist-btn" onClick={handleAddToWishlist}>
              <FontAwesomeIcon icon={faHeart} />
              Add to Wishlist
            </button>
            <button className="cart-btn" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faCartShopping} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
