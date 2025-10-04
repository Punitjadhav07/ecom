import React, { useState } from 'react'
import '../css/category.css'

export const Categories = () => {
  const categories = ['All', 'Cloths', 'Electronics', 'Furniture', 'Shoes', 'Miscellaneous'];
  const [activeCategory, setActiveCategory] = useState('Shoes');

  return (
    <div className='categories'>
      <h2 className='categories-title'>Categories</h2>
      <div className='categories-list'>
        {categories.map((item, index) => (
          <button 
            key={index} 
            className={`category-btn ${activeCategory === item ? 'active' : ''}`}
            onClick={() => setActiveCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}