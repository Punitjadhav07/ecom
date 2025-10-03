import React, { useState, useEffect } from 'react';
import '../css/products.css';
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data); // check in console
        setProducts(data); // optional if you want to render later
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='productList'>
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          
        </div>
      ))}
    </div>
  );
};