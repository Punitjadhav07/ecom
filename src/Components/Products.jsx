import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { fetchProducts } from '../Features/productSlice';
import { addItemToCart } from '../Features/cartSlice';
import { addItemToWishlist } from '../Features/wishlistSlice';
import '../css/products.css';

export const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addItemToCart(product));
  };

  const handleAddToWishlist = (e, product) => {
    e.stopPropagation();
    dispatch(addItemToWishlist(product));
  };

  return (
    <div className='productList'>
      {filteredProducts.map(product => (
        <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price : ₹ {Math.round(product.price * 80)}/-</p>
            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                Add To Cart
              </button>
              <button 
                className="add-to-wishlist-btn"
                onClick={(e) => handleAddToWishlist(e, product)}
              >
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