import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../Features/productSlice'
import '../css/category.css'

export const Categories = () => {
  const dispatch = useDispatch();
  const { selectedCategory, categories } = useSelector((state) => state.products);

  const handleCategoryClick = (categoryKey) => {
    dispatch(setCategory(categoryKey));
  };

  return (
    <div className='categories'>
      <h2 className='categories-title'>Categories</h2>
      <div className='categories-list'>
        {Object.entries(categories).map(([key, value]) => (
          <button 
            key={key} 
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => handleCategoryClick(key)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}